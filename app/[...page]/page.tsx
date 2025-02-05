import { builder } from '@builder.io/react'
import { RenderBuilderContent } from '@/components/builder/RenderBuilderContent'

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

interface PageProps {
  params: {
    page: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  
  // Fetch the page content from Builder.io
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise()

  return (
    <>
      {/* Render the Builder.io content */}
      <RenderBuilderContent content={page} />
    </>
  )
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
  const urlPath = '/' + (params?.page?.join('/') || '')
  
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise()

  return {
    title: page?.data?.title,
    description: page?.data?.description,
  }
} 