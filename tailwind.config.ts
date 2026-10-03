import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8E62E',
          dark: '#9BC924',
        },
        secondary: '#FF6B35',
        'accent-orange': '#FF8C42',
        background: '#FAF8F3',
        foreground: '#1A1A1A',
        cream: '#F5F2E8',
        beige: '#E8E3D6',
        success: '#4CAF50',
        error: '#EF4444',
        warning: '#F59E0B',
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-muted': '#8A8A8A',
        border: '#E0E0E0',
        'card-bg': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        comico: ['Comico', 'sans-serif'],
        'inter-tight': ['var(--font-inter-tight)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '2000px',
      },
    },
  },
  plugins: [],
}

export default config
