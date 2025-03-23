import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tool Not Found | Nick\'s List',
  description: 'The requested tool could not be found. Browse our collection of developer tools and resources.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="container px-4 py-10">
      <Link 
        href="/" 
        className="inline-flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Directory</span>
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find the tool you're looking for. It might have been removed or the URL might be incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors rounded-md"
        >
          Browse All Tools
        </Link>
      </div>
    </div>
  )
} 