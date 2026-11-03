import type { ResourceGroup } from './types'

export const overseasGroups: ResourceGroup[] = [
  {
    id: 'overseas-research',
    title: '海外项目调研网站',
    items: [
      {
        rank: 1,
        name: 'Indie Hackers',
        url: 'https://www.indiehackers.com/',
        goal: '独立创始人真实营收复盘、获客渠道、定价、踩坑、项目取舍案例，找完整故事案例',
        avoid: '不要陷入无尽滚动，挑有公开收入与完整复盘的帖',
      },
      {
        rank: 2,
        name: 'Product Hunt',
        url: 'https://www.producthunt.com/',
        goal: '每日上新 AI 网页工具、Agent、数字人、数字素材生成产品；产品卖点、冷启动、用户评论，抓热点选题',
        avoid: '别只看榜一，关注评论里的真实痛点',
      },
      {
        rank: 3,
        name: 'Hacker News',
        url: 'https://news.ycombinator.com/',
        goal: '工程师讨论：AI商业化陷阱、单人开发成本、技术方案利弊；提取争议观点增加视频思辨感',
        avoid: '避免陷入技术细节争论，只抽可用于论点的冲突',
      },
      {
        rank: 4,
        name: 'TechCrunch AI 专栏',
        url: 'https://techcrunch.com/category/ai/',
        goal: 'AI 初创、数字虚拟化项目融资新闻与行业风口叙事，用来做视频开篇钩子',
        avoid: '融资新闻本身不是选题，只取叙事钩子',
      },
      {
        rank: 5,
        name: 'Hugging Face',
        url: 'https://huggingface.co/',
        goal: 'AI 应用 Demo、Agent、数字形象/场景生成工具；评估接口选型与应用层实现成本边界',
        avoid: '不追模型训练细节，只看应用层可复制性',
      },
      {
        rank: 6,
        name: 'X（Twitter）',
        url: 'https://twitter.com/',
        goal: '独立创始人实时动态、收入截图、短视频投放复盘',
        note: '检索：indie hacker / AI SaaS / side project revenue',
        avoid: '信息噪声大，固定关键词与关注列表，限时浏览',
      },
    ],
  },
]
