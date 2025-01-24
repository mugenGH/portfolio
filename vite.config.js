import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output folder is set to 'dist'
  },
  base: '/<repository-name>/', // Replace <repository-name> with your GitHub repo name
})
