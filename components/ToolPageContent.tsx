'use client'

import { useEffect, useState } from 'react'
import { builder } from '@/lib/builder'
import { Tool } from '@/types/tool'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BuilderTool {
  data?: {
    name: string
    description: string
    shortDescription?: string
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

export function ToolPageContent({ slug }: { slug: string }) {
  const [tool, setTool] = useState<Tool | null>(null)
  const [loading, setLoading] = useState(true)
  const [categoryMap, setCategoryMap] = useState<Map<string, string>>(new Map())

  // Fetch categories first
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesList = await builder
          .getAll('category', {
            fields: 'data,id',
            options: { 
              includeRefs: true,
            },
            cachebust: true
          })

        const catMap = new Map<string, string>()
        categoriesList.forEach((cat: any) => {
          if (cat.data?.name) {
            catMap.set(cat.id, cat.data.name)
          }
        })
        setCategoryMap(catMap)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  // Then fetch tool
  useEffect(() => {
    async function fetchTool() {
      try {
        const toolsList = await builder
          .getAll('tool', {
            fields: 'data',
            options: { 
              includeRefs: true,
            },
            cachebust: true
          }) as BuilderTool[]

        if (!toolsList || !Array.isArray(toolsList)) {
          notFound()
        }

        const matchingTool = toolsList.find(
          item => item?.data?.name.toLowerCase() === decodeURIComponent(slug)
        )

        if (!matchingTool || !matchingTool.data) {
          notFound()
        }

        setTool({
          name: matchingTool.data.name,
          description: matchingTool.data.description,
          shortDescription: matchingTool.data.shortDescription,
          category: typeof matchingTool.data.category === 'string'
            ? matchingTool.data.category
            : categoryMap.get(matchingTool.data.category.id) || 'Uncategorized',
          url: matchingTool.data.url,
          image: matchingTool.data.image,
          features: matchingTool.data.features?.map(f => f.feature),
          documentation: matchingTool.data.documentation,
          pricing: matchingTool.data.pricing,
          platforms: matchingTool.data.platforms?.map(p => p.platform),
          alternatives: matchingTool.data.alternatives?.map(a => a.alternative),
        })
      } catch (error) {
        console.error('Error fetching tool:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }

    if (categoryMap.size > 0) {
      fetchTool()
    }
  }, [slug, categoryMap])

  if (loading) {
    return (
      <div className="container px-4 py-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  if (!tool) {
    notFound()
  }

  return (
    <div className="container px-4 py-10">
      <Link 
        href="/" 
        className="inline-flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Directory</span>
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="sticky top-24">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            {tool.image ? (
              <Image
                src={tool.image}
                alt={`${tool.name} logo`}
                fill
                className="object-contain p-8"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>
        </div>

        {/* Right Column - All Content */}
        <div className="space-y-8">
          {/* Tool Header Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
            <div 
              className="text-lg mb-6 prose prose-lg prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: tool.description }}
            />
            <div className="flex items-center gap-4">
              <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors rounded-md"
              >
                Visit Website
              </a>
              {tool.documentation && (
                <a 
                  href={tool.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors rounded-md"
                >
                  View Documentation
                </a>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium">Category</dt>
                <dd className="text-muted-foreground">{tool.category}</dd>
              </div>
              {tool.pricing && (
                <div>
                  <dt className="font-medium">Pricing</dt>
                  <dd className="text-muted-foreground">
                    {tool.pricing.free && <div>✓ Free tier available</div>}
                    {tool.pricing.hasPaidPlan && tool.pricing.priceRange && (
                      <div>✓ Paid plans: {tool.pricing.priceRange}</div>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Features Section */}
          {tool.features && tool.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Platforms Section */}
          {tool.platforms && tool.platforms.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Supported Platforms</h2>
              <div className="flex flex-wrap gap-2">
                {tool.platforms.map((platform, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Alternatives Section */}
          {tool.alternatives && tool.alternatives.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Alternatives</h2>
              <div className="flex flex-wrap gap-2">
                {tool.alternatives.map((alternative, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 border border-primary/20 text-muted-foreground rounded-full text-sm"
                  >
                    {alternative}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 