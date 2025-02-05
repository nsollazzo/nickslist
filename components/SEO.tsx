import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: string
  robots?: boolean
}

const defaultSEO = {
  title: 'Tool Directory Template',
  description: 'A modern, searchable tool directory template built with Next.js, Tailwind CSS, and Builder.io',
  url: 'https://tool-directory-template.vercel.app',
  image: '/og-image.png',
}

export function constructMetadata({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  type = 'website',
  robots = true,
}: SEOProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${defaultSEO.title}`,
    },
    description,
    keywords: ['tool directory', 'template', 'next.js', 'react', 'tailwind css', 'builder.io'],
    authors: [{ name: defaultSEO.title }],
    creator: defaultSEO.title,
    publisher: defaultSEO.title,
    robots: {
      index: robots,
      follow: robots,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: defaultSEO.url,
      siteName: defaultSEO.title,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    manifest: '/site.webmanifest',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    other: {
      'theme-color': '#000000',
    },
    metadataBase: new URL(defaultSEO.url),
  }
} 