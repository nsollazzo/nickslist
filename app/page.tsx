'use client'

import { useState, useEffect } from 'react'
import { builder } from '@/lib/builder'
import { BuilderComponent } from '@builder.io/react'
import { ToolCard } from "@/components/ToolCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tool } from '@/types/tool'

interface BuilderTool {
  data?: {
    name: string
    description: string
    category: {
      '@type': '@builder.io/core:Reference'
      id: string
      model: string
    } | string
    url: string
    image?: string
    features?: Array<{ feature: string }>
    documentation?: string
    pricing?: {
      free?: boolean
      hasPaidPlan?: boolean
      priceRange?: string
    }
    platforms?: Array<{ platform: string }>
    alternatives?: Array<{ alternative: string }>
  }
}

interface BuilderCategory {
  id: string
  name: string
  data?: {
    name: string
    description?: string
  }
}

function ToolCardSkeleton() {
  return (
    <div className="relative flex flex-col h-full border-2 rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-muted animate-pulse rounded w-1/2"></div>
          <div className="h-5 w-5 bg-muted animate-pulse rounded"></div>
        </div>
        <div className="h-4 bg-muted animate-pulse rounded w-1/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
          <div className="h-4 bg-muted animate-pulse rounded w-4/5"></div>
          <div className="h-4 bg-muted animate-pulse rounded w-2/3"></div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [builderContent, setBuilderContent] = useState(null)
  const [tools, setTools] = useState<Tool[]>([])
  const [categories, setCategories] = useState<string[]>(['All'])
  const [error, setError] = useState<string | null>(null)
  const [categoryMap, setCategoryMap] = useState<Map<string, string>>(new Map())

  // Fetch categories from Builder.io
  useEffect(() => {
    async function fetchCategories() {
      try {
        console.log('Fetching categories from Builder.io...')
        const categoriesList = await builder
          .getAll('category', {
            fields: 'data,id,name',
            options: { 
              includeRefs: true,
            },
            cachebust: true
          }) as BuilderCategory[]

        console.log('Received categories from Builder:', categoriesList)
        
        if (!categoriesList || !Array.isArray(categoriesList)) {
          console.error('No categories found or invalid response:', categoriesList)
          return
        }

        // Create a map of category IDs to names
        const catMap = new Map<string, string>()
        categoriesList.forEach(cat => {
          if (cat.data?.name) {
            catMap.set(cat.id, cat.data.name)
          }
        })
        setCategoryMap(catMap)

        const validCategories = ['All', ...categoriesList
          .filter(item => item?.data?.name)
          .map(item => item.data!.name)
          .sort()]

        console.log('Processed categories:', validCategories)
        setCategories(validCategories)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  // Fetch tools from Builder.io
  useEffect(() => {
    async function fetchTools() {
      try {
        console.log('Fetching tools from Builder.io...')
        const toolsList = await builder
          .getAll('tool', {
            fields: 'data',
            options: { 
              includeRefs: true,
            },
            cachebust: true
          }) as BuilderTool[]

        console.log('Raw Builder response:', toolsList)
        
        if (!toolsList || !Array.isArray(toolsList)) {
          console.error('No tools found or invalid response:', toolsList)
          setError('No tools found')
          return
        }

        const validTools = toolsList
          .filter((item): item is BuilderTool & { data: NonNullable<BuilderTool['data']> } => {
            const isValid = item?.data !== undefined && 
              typeof item.data.name === 'string' && 
              typeof item.data.description === 'string' && 
              (typeof item.data.category === 'string' || 
               (typeof item.data.category === 'object' && item.data.category['@type'] === '@builder.io/core:Reference')) && 
              typeof item.data.url === 'string'
            
            if (!isValid) {
              console.warn('Invalid tool:', item)
            }
            return isValid
          })
          .map(item => {
            // Get category name from reference or direct value
            let categoryName = typeof item.data.category === 'string' 
              ? item.data.category 
              : categoryMap.get(item.data.category.id) || 'Uncategorized'

            return {
              name: item.data.name,
              description: item.data.description,
              category: categoryName,
              url: item.data.url,
              image: item.data.image,
              features: item.data.features?.map(f => f.feature),
              documentation: item.data.documentation,
              pricing: item.data.pricing,
              platforms: item.data.platforms?.map(p => p.platform),
              alternatives: item.data.alternatives?.map(a => a.alternative),
            }
          })

        console.log('Final processed tools:', validTools)
        setTools(validTools)
        setError(null)
      } catch (error) {
        console.error('Error fetching tools:', error)
        setError('Failed to fetch tools')
      }
    }

    fetchTools()
  }, [categoryMap]) // Re-run when categoryMap changes

  // Fetch Builder.io page content
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get('page', {
          userAttributes: {
            urlPath: '/',
          },
        })
        .toPromise()

      setBuilderContent(content)
    }

    fetchContent()
  }, [])

  // Filter tools based on selected category
  const filteredTools = tools.filter(tool => 
    selectedCategory === 'All' || tool.category === selectedCategory
  )

  return (
    <div className="flex-1">
      <div className="container px-4 py-10 md:py-16">
        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 border-2 border-red-500 bg-red-50 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Builder.io Content */}
        {builderContent && (
          <BuilderComponent
            model="page"
            content={builderContent}
          />
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="category-select" className="text-sm font-medium">
              Filter by Category
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger id="category-select" className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem 
                    key={category} 
                    value={category}
                    className="cursor-pointer"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-xs text-muted-foreground">
              {categories.length > 1 ? 
                `${categories.length - 1} categories available` : 
                'Loading categories...'}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.length === 0 ? (
            // Show loading skeletons
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <ToolCardSkeleton key={index} />
              ))}
            </>
          ) : (
            // Show actual tools
            filteredTools.map(tool => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
                category={tool.category}
                url={tool.url}
              />
            ))
          )}
        </div>

        {/* No Tools Message - Only show when not loading and no filtered results */}
        {tools.length > 0 && filteredTools.length === 0 && !error && (
          <div className="text-center text-muted-foreground mt-8">
            No tools found in this category. Try selecting a different category.
          </div>
        )}
      </div>
    </div>
  )
} 