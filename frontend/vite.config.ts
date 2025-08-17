import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: [
      'd01d112a46be.ngrok-free.app', // Your ngrok domain
      '.ngrok-free.app' // Allow all ngrok domains (recommended)
    ]
  }

  // No need for explicit PostCSS config unless you have special needs
})