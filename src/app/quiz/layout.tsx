import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Sharing Plan Quiz — Find Your Best Plan in 60 Seconds | WhichHealthShare',
  description: 'Answer 6 quick questions to get personalized health sharing plan recommendations based on your budget, health needs, and preferences. Free, takes 60 seconds.',
  openGraph: {
    title: 'Find Your Best Health Sharing Plan — Free Quiz',
    description: 'Answer 6 questions. Get personalized recommendations for health sharing, crowdfunding, or insurance. Takes 60 seconds.',
  }
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children
}
