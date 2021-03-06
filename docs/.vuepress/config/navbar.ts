import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    // {
    //     text: '团队',
    //     link: '/team'
    // },
    {
        text: '项目',
        children: [
            // {
            //     text: '项目概述',
            //     link: '/project/overview'
            // },
            {
                text: '项目计划',
                link: '/project/plan'
            },
            {
                text: '需求分析',
                link: '/project/requirement-analysis'
            },
            {
                text: '概要设计',
                link: '/project/outline-design'
            },
            {
                text: '测试计划',
                link: '/project/test-plan'
            }
        ]
    },
    { text: 'GitHub', link: 'https://github.com/xb5st' }
];