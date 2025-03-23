import { Metadata } from 'next'
import { constructMetadata } from '@/components/SEO'
import { ToolPageContent } from '@/components/ToolPageContent'

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug).toLowerCase()
  
  // Since we can't access Builder.io API directly in server component due to issues,
  // let's set a minimal metadata and let the client component handle the details
  return constructMetadata({
    title: `${decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1)} - Nick's List`,
    description: 'Tool details and information',
  })
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  return <ToolPageContent slug={params.slug} />
} 