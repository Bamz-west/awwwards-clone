import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        theme: {
          extend: {
            fontFamily: {
              zentry: ['zentry', 'sans-serif'],
              general: ['general', 'sans-serif'],
              "circular-web": ['circular-web', 'sans-serif'],
              "robert-medium": ['robert-medium', 'sans-serif'],
              "robert-regular": ['robert-regular', 'sans-serif'],
            },

            colors: {
              blue: {
                50: "#DFDFF0",
                75: "#DFDFF2",
                100: "#F0F2FA",
                200: "#101010",
                300: "#4FB7DD",
              },
              violet: {
                300: "#5724FF"
              },
              yellow: {
                100: "8E983F",
                300: "#EDFF66"
              }
            }
          },
        },
      },
    }),
  ],
})
