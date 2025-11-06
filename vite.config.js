import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estás en GitHub Pages (variable que define Actions o puedes setear manualmente)
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

// Ajusta automáticamente la base según el entorno:
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/mi-pagina-personal/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
