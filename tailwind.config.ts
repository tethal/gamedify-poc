import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    //player A
    'bg-[#f3f400]',
    'text-[#f3f400]',
    'hover:text-[#f3f400]',
    'border-[#f3f400]',
    'hover:border-[#f3f400]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#f3f400]',
    'hover:shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#f3f400]',
    'shadow-[0px_0px_10px_5px_#f3f400]',
    'hover:shadow-[0px_0px_10px_5px_#f3f400]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_#f3f400]',
    ' hover:shadow-[0px_0px_10px_2px_#f3f400]',

    //player B
    'bg-[#1f51ff]',
    'text-[#1f51ff]',
    'hover:text-[#1f51ff]',
    'border-[#1f51ff]',
    'hover:border-[#1f51ff]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#1f51ff]',
    'hover:shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#1f51ff]',
    'shadow-[0px_0px_10px_5px_#1f51ff]',
    'hover:shadow-[0px_0px_10px_5px_#1f51ff]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_#1f51ff]',
    ' hover:shadow-[0px_0px_10px_2px_#1f51ff]',

    //player B
    'bg-[#2563EB]',
    'text-[#2563EB]',
    'hover:text-[#2563EB]',
    'border-[#2563EB]',
    'hover:border-[#2563EB]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#2563EB]',
    'hover:shadow-[0px_0px_10px_#fff,0px_0px_10px_20px_#2563EB]',
    'shadow-[0px_0px_10px_5px_#2563EB]',
    'hover:shadow-[0px_0px_10px_5px_#2563EB]',
    'shadow-[0px_0px_10px_#fff,0px_0px_10px_5px_#2563EB]',
    ' hover:shadow-[0px_0px_10px_2px_#2563EB]',
  ],
  darkMode: 'class',
  theme: {},
  plugins: [],
};
export default config;
