import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem,1fr) minmax(0,15rem)',
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
