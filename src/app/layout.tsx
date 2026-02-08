import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhichHealthShare — Find Your Health Sharing Plan',
  description: 'Compare health sharing plans, CrowdHealth crowdfunding, and insurance alternatives. Independent reviews of 15+ ministries.',
  openGraph: {
    title: 'WhichHealthShare — Find Your Health Sharing Plan',
    description: 'Compare health sharing plans, CrowdHealth, and insurance alternatives.',
    url: 'https://whichhealthshare.com',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
