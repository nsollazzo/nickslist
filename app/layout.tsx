import { Inter } from 'next/font/google'
import './globals.css'
import { constructMetadata } from '@/components/SEO'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-background">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex">
              <a className="mr-6 flex items-center space-x-2 hover:text-primary transition-colors" href="/">
                <span className="font-black text-lg tracking-tight">
                  Tool Directory Template
                </span>
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t-2 border-primary py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
            <p className="text-center text-sm font-medium md:text-left">
              Built with Next.js and shadcn/ui. Open source project.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 