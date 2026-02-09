// Rebuild trigger
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import StickyQuizCTA from '@/components/StickyQuizCTA'
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
        {/* Plausible Analytics */}
        <script defer data-domain="whichhealthshare.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>
        <Header />
        <main className="pt-20 min-h-screen pb-20 md:pb-0">
          {children}
        </main>
        <StickyQuizCTA />
        <ExitIntentPopup />
        <Footer />
      </body>
    </html>
  )
}
