import type { NavItem } from './types'

export const siteMeta = {
  zhName: '创业资讯收集',
  enName: 'Startup Intel',
  positioning:
    'AI数字产品 / 独立 Side Project · 技术+商业拆解自媒体工作台：素材调研、选题储备、脚本分镜、剪辑学习、标题封面、关键词库。',
  audience: '仅供个人查阅与制作节奏管理',
}

export const navItems: NavItem[] = [
  {
    path: '/',
    label: '总览',
    short: 'Home',
    description: '定位、板块地图与每日执行入口',
  },
  {
    path: '/overseas',
    label: '海外调研',
    short: 'Overseas',
    description: 'AI数字变现与独立项目素材源',
  },
  {
    path: '/domestic',
    label: '国内资讯',
    short: 'Domestic',
    description: '本土AI数字产品与变现玩法',
  },
  {
    path: '/bilibili',
    label: 'B站叙事',
    short: 'Bilibili',
    description: '长视频叙事、焦点与转场参考',
  },
  {
    path: '/douyin',
    label: '抖音短视频',
    short: 'Douyin',
    description: '竖屏钩子、蒙版与焦点学习',
  },
  {
    path: '/tiktok',
    label: 'TikTok参考',
    short: 'TikTok',
    description: '海外独立产品叙事风格',
  },
  {
    path: '/tools',
    label: '剪辑工具',
    short: 'Tools',
    description: '剪辑与制作工具清单',
  },
  {
    path: '/templates',
    label: '制作模板',
    short: 'Templates',
    description: '调研、分镜、短视频、选题模板',
  },
  {
    path: '/keywords',
    label: '关键词库',
    short: 'Keywords',
    description: '海外检索 + 平台标题标签',
  },
  {
    path: '/titles',
    label: '标题封面',
    short: 'Titles',
    description: 'B站 / 抖音标题与封面范式',
  },
  {
    path: '/workflow',
    label: '执行与自检',
    short: 'Workflow',
    description: '防拖延规则与成片发布清单',
  },
  {
    path: '/gamedev',
    label: '游戏开发社区',
    short: 'GameDev',
    description: '国内讨论入口，中文独游资讯与行业风向',
  },
  {
    path: '/partners',
    label: '合作招募',
    short: 'Partners',
    description: '能点开的找队友渠道和 QQ 群',
  },
]
