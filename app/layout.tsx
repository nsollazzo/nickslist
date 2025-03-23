import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { constructMetadata } from '@/components/SEO'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { PWASetup } from '@/components/PWASetup'

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <PWASetup />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-background">
            <div className="container flex h-16 items-center justify-between">
              <div className="mr-4 flex">
                <a className="mr-6 flex items-center space-x-2 hover:text-primary transition-colors" href="/">
                  <span className="font-black text-lg tracking-tight">
                    Nick's List
                  </span>
                </a>
              </div>
              <ThemeToggle />
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
        </ThemeProvider>
      </body>
    </html>
  )
} 