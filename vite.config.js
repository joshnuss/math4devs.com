import { sveltekit } from '@sveltejs/kit/vite'
import json5 from 'vite-plugin-json5'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    json5(),
    sveltekit()
  ]
})
