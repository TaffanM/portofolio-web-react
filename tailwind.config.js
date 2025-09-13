/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: [ 
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
   ],
  theme: {
    fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    extend: {
      colors: {
        'white-primary': '#ffffff',
        'white-primaryFade': '#F4F2F1',
        'black-primary': '#000000',
        'black-background': '#222831',
        'red-primary': '#D91E15',
        'red-primary900': '#Fbe8e7',
        'red-primary200': '#e14b44',
        'purple-primary': '#301C67',
        'purple-primary900': '#eae8ef',
        'purple-secondary': '#4d368a'
      },
      screens: {
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1080px'}
      }
    },
  },
  plugins: [addVariablesForColors, addFontVariables],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function addFontVariables({ addBase, theme}) {
    addBase({
        ":root": {
            "--font-sans": theme("fontFamily.sans").join(", "),
            "--font-mono": theme("fontFamily.mono").join(", "),
        }
    })
}

