import { DefaultThemeOptions, defineUserConfig } from "vuepress";
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";
import { mermaidPlugin } from "./plugins/mermaid";

export default defineUserConfig<DefaultThemeOptions>({
    base: '/',
    title: 'StudyHub',
    description: '集作业、考试、答疑于一体的综合教学平台',
    head: [
        ['link', { rel: 'icon', href: '/images/studying.png' }],
    ],
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
        [
            mermaidPlugin
        ],
    ],
    themeConfig: {
        navbar: navbar,
        // sidebar: sidebar,
        logo: '/images/studying.png',
    },
    bundler: '@vuepress/vite',
    bundlerConfig: {
      viteOptions: {
        configFile: 'vite.config.ts',
      },
    },
});