import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#115E59',
          light: '#0D9488',
          lighter: '#CCFBF1'
        },
        accent: {
          DEFAULT: '#EA580C',
          hover: '#C2410C'
        },
        gold: {
          DEFAULT: '#B45309',
          bg: '#FFFBEB',
          border: '#FDE68A'
        },
        bg: {
          DEFAULT: '#FAFAF7',
          warm: '#F5F0E8',
          card: '#FFFFFF'
        },
        text: {
          DEFAULT: '#1C1917',
          secondary: '#57534E',
          muted: '#A8A29E'
        },
        border: {
          DEFAULT: '#E7E5E4'
        },
        success: '#16A34A',
        warning: '#D97706'
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem'
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem'
      }
    }
  },
  plugins: []
}
export default config
