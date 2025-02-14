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
        primary: "#ffffff",
        secondary: "#e6e6e6", // Soft grayish tone for secondary elements
        dimWhite: "rgba(255, 255, 255, 0.9)", // Dim White for softer text
        dimBlue: "rgba(62, 70, 103, 0.1)", // Subtle blue tint (for borders or shadows)
        grayLight: "#dcdcdc", // Light gray
        grayDark: "#14101d", // Dark gray
        black: "#11101d", // Black text or accents
        white: "#ffffff", // Pure white background
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"], // Ensure Raleway font is included
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'md': '0.25rem', // Custom border radius for medium
        'lg': '0.375rem',
        'full': '9999px', // Custom border radius for full circle (full radius)
        'curved': '1.25rem', // Custom border radius for a more curved edge
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

export default config