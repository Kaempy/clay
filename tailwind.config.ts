import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#141414', light: '#BDBDBD' },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        home: "url('/home-bg.png')",
        texture: 'url(/texture.png)',
        menu: 'url(/menu.png)',
        'dark-gradient':
          'linear-gradient(179.95deg, rgba(0, 0, 0, 0.76) 10.09%, rgba(0, 0, 0, 0.415188) 52.48%, rgba(0, 0, 0, 0) 68.14%), linear-gradient(179.95deg, rgba(0, 0, 0, 0) 70.6%, rgba(0, 0, 0, 0.51) 76.83%)',
      },
      boxShadow: {
        spread: '0px 1px 10.5px 5px #FFFFFF40',
      },
    },
  },
  plugins: [],
} satisfies Config;
