import type { ResourceGroup } from './types'

export const bilibiliGroups: ResourceGroup[] = [
  {
    id: 'bilibili-creators',
    title: 'B站博主｜长视频叙事 / 画面焦点 / 转场',
    items: [
      {
        rank: 1,
        name: '南门录像厅（阿浪）',
        url: 'https://space.bilibili.com/11095064',
        goal: '剪辑底层思维、逻辑转场；画面服务观点，拒绝炫技特效',
        focus: '《知识类视频怎么做》《剪辑不是加特效》系列',
        avoid: '跳过纯特效炫技片段',
      },
      {
        rank: 2,
        name: '李厚辰',
        url: 'https://space.bilibili.com/24014578',
        goal: '思维导图、静态图表素材处理；蒙版、推镜、局部放大，分步释放信息',
        focus: '思辨长视频里图表部分的镜头处理',
      },
      {
        rank: 3,
        name: '所长林超',
        url: 'https://space.bilibili.com/13087936',
        goal: '动态图表、关键词弹出，极简转场，理性科普节奏',
        focus: '商业科普系列，学习论点与画面同步',
      },
      {
        rank: 4,
        name: '电影最TOP',
        url: 'https://space.bilibili.com/39348424',
        goal: '截图素材局部框选、画面聚焦技巧，网页截图素材处理方式',
        focus: '影评里资料截图剪辑片段',
      },
    ],
  },
]

export const douyinGroups: ResourceGroup[] = [
  {
    id: 'douyin-creators',
    title: '抖音博主｜竖屏钩子 / 蒙版 / 焦点',
    items: [
      {
        rank: 1,
        name: '在沉淀的王业同学',
        searchHint: '抖音搜 ID：在沉淀的王业同学',
        goal: '遮罩蒙版、关键帧推拉聚焦，知识口播竖屏视线引导',
        focus: '知识类剪辑教程、画面局部放大教学',
        avoid: '跳过剧情类、情感类剪辑案例',
      },
      {
        rank: 2,
        name: 'Xuan子',
        searchHint: '抖音搜 ID：Xuan子',
        goal: '口播文案和画面匹配逻辑，图文卡点，一句话对应一张画面',
        focus: '知识口播画面搭配系列',
        avoid: '不要使用花里胡哨贴纸特效',
      },
    ],
  },
]

export const tiktokGroups: ResourceGroup[] = [
  {
    id: 'tiktok-refs',
    title: 'TikTok 参考｜只参考叙事，不学中文剪辑',
    items: [
      {
        rank: 1,
        name: 'IndieHackers 官方账号',
        searchHint: 'TikTok 搜：indiehackers',
        goal: '独立产品短视频范式：网页录屏+局部放大，极简表达产品收益',
        focus: '项目介绍短视频，学习海外项目叙事钩子',
      },
      {
        rank: 2,
        name: 'Johnny.Decimal',
        searchHint: 'TikTok 搜：johnnydecimal',
        goal: '理性知识内容，思维导图、网页素材、低干扰视觉风格',
        focus: '知识科普短片，干净画面布局',
      },
    ],
  },
]
