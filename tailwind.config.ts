import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-[#EB4457]',
    'bg-[#2764EB]',
    'hover:bg-[#c72436]',
    'hover:bg-[#0444bd]',
    'hover:text-[#EB4457]',
    'hover:border-[#EB4457]',
    'hover:border-[#2764EB]',
    'hover:text-[#2764EB]',
    'hover:text-[#c72436]',
    'hover:border-[#c72436]',
    'hover:border-[#0444bd]',
    'hover:text-[#0444bd]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#EB4457]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#2764EB]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#c72436]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#0444bd]',
  ],
  theme: {
    extend: {
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
