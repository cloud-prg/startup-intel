export type NavItem = {
  path: string
  label: string
  short: string
  description: string
}

export type LinkResource = {
  rank: number
  name: string
  url?: string
  searchHint?: string
  nature?: string
  heat?: string
  activity?: string
  goal: string
  avoid?: string
  focus?: string
  note?: string
}

export type ResourceGroup = {
  id: string
  title: string
  items: LinkResource[]
}

export type TemplateDoc = {
  id: string
  title: string
  subtitle: string
  body: string
}

export type KeywordBucket = {
  id: string
  title: string
  items: string[]
}

export type TitlePattern = {
  id: string
  title: string
  patterns: string[]
  examples?: string[]
}

export type RuleItem = {
  id: string
  text: string
}

export type ChecklistGroup = {
  id: string
  title: string
  items: string[]
}

export type CommunityRow = {
  name: string
  /** 一行说明：用来做什么、什么时候更热闹 */
  usage: string
  region: 'cn' | 'global'
  url?: string
  /** 一个群号，或多个交流群 */
  qq?: string | string[]
  /** 怎么进群；没有 QQ 时可省略 */
  joinNote?: string
}

export type ChannelRow = {
  name: string
  /** 一行说明：适合什么招募 */
  scenario: string
  region: 'cn' | 'global'
  url?: string
  qq?: string | string[]
  joinNote?: string
}
