import type { ResourceGroup } from './types'

export const domesticGroups: ResourceGroup[] = [
  {
    id: 'domestic-news',
    title: '国内行业资讯网站',
    items: [
      {
        rank: 1,
        name: '36氪',
        url: 'https://36kr.com/',
        goal: '国内 AI SaaS、数字人、AI 内容工具融资与商业化案例；中外项目模式对比',
      },
      {
        rank: 2,
        name: '甲子光年',
        url: 'https://www.jiazi.cn/',
        goal: 'AI 应用落地、数字虚拟化（数字人/数字空间）深度产业分析，适合长视频深度论点',
      },
      {
        rank: 3,
        name: '掘金',
        url: 'https://juejin.cn/',
        goal: '国内前端/全栈开发者做 AI 小工具、网页 Side Project 的部署、上线、变现踩坑记录',
      },
      {
        rank: 4,
        name: 'V2EX',
        url: 'https://www.v2ex.com/',
        goal: '程序员社区真实吐槽、产品反馈、独立项目变现踩坑，接地气民间视角',
      },
      {
        rank: 5,
        name: '虎嗅',
        url: 'https://www.huxiu.com/',
        goal: '商业逻辑思辨文章，提炼观点与行业判断，丰富视频表达角度',
      },
      {
        rank: 6,
        name: '映维网（XR 数字虚拟专项）',
        url: 'https://www.areavr.com/',
        goal: '数字人、虚拟场景、数字资产、WebXR 产品资讯',
        note: '可选浏览，不感兴趣可少看',
      },
    ],
  },
]
