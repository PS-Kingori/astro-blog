import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://PS-Kingori.github.io/astro-blog',
    base: '/astro-blog',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
        // (await import('@playform/compress')).default({
        //     Path: './dist'
        // })
    ]
});
