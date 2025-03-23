import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: string
  robots?: boolean
}

const defaultSEO = {
  title: "Nick's List",
  description: "A curated collection of tools and resources that Nick recommends for developers and tech enthusiasts",
  url: 'https://nickslist.vercel.app',
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
      template: title === defaultSEO.title ? '%s' : `%s | ${defaultSEO.title}`,
    },
    description,
    keywords: ['developer tools', 'software recommendations', 'tech tools', 'nick\'s picks', 'development resources'],
    authors: [{ name: 'Nick' }],
    creator: 'Nick',
    publisher: defaultSEO.title,
    robots: {
      index: robots,
      follow: robots,
    },
    openGraph: {
      type: type as 'website',
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
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon/favicon.ico', sizes: 'any' }
      ],
      apple: { url: '/favicon/apple-touch-icon.png', type: 'image/png' },
      shortcut: '/favicon/favicon.ico',
    },
    other: {
      'theme-color': '#000000',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
    metadataBase: new URL(defaultSEO.url),
  }
} 