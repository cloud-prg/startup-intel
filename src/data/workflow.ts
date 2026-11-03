import type { ChecklistGroup, RuleItem } from './types'

export const executionRules: RuleItem[] = [
  {
    id: 'r1',
    text: '每日调研上限：60分钟；单案例调研硬性上限2小时，时间到立刻停止搜集，开始填写模板。',
  },
  {
    id: 'r2',
    text: '调研优先级：先 Indie Hackers + Product Hunt；隔天看 Hacker News / 36氪；每周一次浏览 Hugging Face / 映维网。',
  },
  {
    id: 'r3',
    text: '剪辑原则：转场只作为段落切换标记；画面运动只用来引导视线，不做单纯炫技。',
  },
  {
    id: 'r4',
    text: '内容输出节奏：每完成2个案例调研，产出1份完整分镜脚本，优先剪短视频切片。',
  },
  {
    id: 'r5',
    text: '选题排期：优先热度【高】；同热度优先选有公开营收数据的项目。',
  },
  {
    id: 'r6',
    text: '内容红线：不做手把手 Demo 教程，全程聚焦「技术取舍+商业逻辑」，不讲解底层模型训练。',
  },
]

export const checklists: ChecklistGroup[] = [
  {
    id: 'content',
    title: '内容自检',
    items: [
      '有明确反常识观点，不是单纯复述新闻',
      '包含技术取舍分析（你的差异化部分）',
      '风险、短板有提到，不单方面吹捧项目',
    ],
  },
  {
    id: 'edit',
    title: '画面剪辑自检',
    items: [
      '无花哨旋转/闪白转场，只用淡入、硬切、蒙版推拉',
      '关键数据使用蒙版局部放大聚焦',
      'BGM音量低于人声，不抢听觉重心',
    ],
  },
  {
    id: 'title-cover',
    title: '标题封面自检',
    items: [
      'B站标题：讲清案例+核心观点',
      '抖音标题：3秒钩子，制造认知冲突',
      '封面文字简洁，不密密麻麻堆字',
    ],
  },
]
