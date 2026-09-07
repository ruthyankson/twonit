import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Root base path: the site deploys to the custom domain twonit.com at
// its root, not to a github.io/<repo> subpath. If you ever deploy this
// to https://<user>.github.io/<repo>/ WITHOUT a custom domain instead,
// change base to '/<repo>/' -- see README.md's deployment section.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    // Keep this modest and cacheable rather than one giant bundle -- the
    // whole site is a handful of sections, so default chunking is fine.
    sourcemap: false,
  },
})
