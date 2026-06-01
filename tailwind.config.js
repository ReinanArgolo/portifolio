/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#101415',
        surface: '#101415',
        'surface-lowest': '#0b0f10',
        'surface-low': '#191c1e',
        'surface-container': '#1d2022',
        'surface-high': '#272a2c',
        'surface-highest': '#323537',
        'on-surface': '#e0e3e5',
        'on-surface-variant': '#b9cacb',
        outline: '#849495',
        'outline-variant': '#3a494b',
        cyan: {
          electric: '#00dbe7',
          bright: '#74f5ff',
          pale: '#e1fdff',
        },
        purple: {
          tech: '#dcb8ff',
          deep: '#7701d0',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(0, 219, 231, 0.3)',
        'glow-soft': '0 0 40px rgba(0, 219, 231, 0.12)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(0, 219, 231, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 219, 231, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
