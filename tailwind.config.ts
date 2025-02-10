import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#153B3C',
          light: '#1D4E4F',
          dark: '#0F2627',
        },
        secondary: {
          DEFAULT: '#EDEFF3',
          light: '#F5F7FA',
          dark: '#DFE1E6',
        },
        foreground: {
          DEFAULT: '#153B3C',
          light: '#4A5568',
          dark: '#1A202C',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F7FAFC',
          dark: '#0F2627',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

export default config;
