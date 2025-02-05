import { MetadataRoute } from 'next'
import { builder } from '@/lib/builder'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all tools from Builder.io
  const tools = await builder
    .getAll('tool', {
      fields: 'data',
      options: { 
        includeRefs: true,
      },
      cachebust: true
    })

  const toolUrls = tools
    .filter((tool: any) => tool?.data?.name)
    .map((tool: any) => ({
      url: `https://tool-directory-template.vercel.app/${encodeURIComponent(tool.data.name.toLowerCase())}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: 'https://tool-directory-template.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...toolUrls,
  ]
} 