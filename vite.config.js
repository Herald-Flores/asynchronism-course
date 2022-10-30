import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import glob from 'glob'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
    manifest: false,
    target: 'es2021',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, 'src', '*.html'))
    },
    minify: isProd,
    write: true,
    watch: {}
  },
  resolve: {
    alias: {}
  }
})
