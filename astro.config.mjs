// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://junhongo-ccs.github.io',
  base: '/astro-test/',
  vite: {
    plugins: [tailwindcss()],
  },
});
