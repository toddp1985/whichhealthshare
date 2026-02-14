// Rebuild trigger
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import StickyQuizCTA from '@/components/StickyQuizCTA'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhichHealthShare — Compare 16 Health Sharing Plans (2026)',
  description: 'Compare 16 health sharing plans side-by-side with verified 2026 pricing. Independent reviews of Zion, Medi-Share, CHM, Sedera, CrowdHealth, Presidio, and more.',
  metadataBase: new URL('https://whichhealthshare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WhichHealthShare — Compare 16 Health Sharing Plans (2026)',
    description: 'Compare 16 health sharing plans with verified 2026 pricing. Independent reviews, no affiliate bias.',
    url: 'https://whichhealthshare.com',
    siteName: 'WhichHealthShare',
    type: 'website',
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
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-0qY3de9XxgJYC_q5t8qII.js"></script>
        <script>
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}}; plausible.init()`}
        </script>
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
