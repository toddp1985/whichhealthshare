import Calculator from './Calculator'

export const metadata = {
  title: 'Health Sharing Cost Calculator 2026 — WhichHealthShare',
  description:
    'Calculate and compare monthly costs across 16 health sharing plans. Enter your household size and get instant pricing estimates.',
  alternates: { canonical: '/calculator' },
}

export default function CalculatorPage() {
  return <Calculator />
}
