import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Travel_Website/",
  plugins: [react({
    jsxRuntime: 'classic'
  })],
})
