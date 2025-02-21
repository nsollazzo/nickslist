import { Metadata } from 'next'
import { builder } from '@/lib/builder'
import { constructMetadata } from '@/components/SEO'
import { ToolPageContent } from '@/components/ToolPageContent'

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const toolsList = await builder
      .getAll('tool', {
        fields: 'data',
        options: { 
          includeRefs: true,
        },
        cachebust: true
      })

    const tool = toolsList.find(
      (item: any) => item?.data?.name.toLowerCase() === decodeURIComponent(params.slug)
    )

    if (!tool?.data) {
      return constructMetadata({
        title: 'Not Found',
        description: 'The requested tool could not be found.',
        robots: false,
      })
    }

    return constructMetadata({
      title: tool.data.name,
      description: tool.data.shortDescription || tool.data.description,
      image: tool.data.image,
      type: 'article',
    })
  } catch (error) {
    return constructMetadata({
      title: 'Error',
      description: 'There was an error loading the tool.',
      robots: false,
    })
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  return <ToolPageContent slug={params.slug} />
} 