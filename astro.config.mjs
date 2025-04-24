import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import lottie from "astro-integration-lottie";


import react from '@astrojs/react';

// import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://PS-Kingori.github.io/astro-blog',
    //base: '/astro-blog',
    integrations: [
      lottie(),
      mdx(),
      sitemap(),
      // (await import('@playform/compress')).default({
      //     Path: './dist'
      // })
      tailwind({
          applyBaseStyles: false
      }),
      react()
    ]
});