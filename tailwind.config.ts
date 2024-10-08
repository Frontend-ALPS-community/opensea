import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/@components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        NaNumSquare: ['NaNumSquare', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        xxs: '10px',
      },
      width: {
        'custom-width': '1440px',
      },
      colors: {
        theme: {
          'text-blue': '#2081E2',
          'text-gray': '#545454',
          'border-gray': '#d9d9d9',
          'text-black': '#121212',
          'text-white': '#FFFFFF',
          'bg-gray': '#F3F3F3',
        },
      },
      aspectRatio: {
        '2/3': '2 / 3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
