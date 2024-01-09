import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'deep-purple': '#121C36',
        'dark-purple': '#4E4C83',
        'purple': '#8D80DD',
        'purple-o-50': '#4E4C8350',
        'ghost-white': '#E3E8EF',
        'mid-gray': '#97A3B6',
        'dark-gray': '#3C4559',
      },
    },
  },
  plugins: [],
}
export default config
