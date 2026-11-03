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
  rank?: number | string
  name: string
  nature: string
  heat?: string
  activity?: string
  usage: string
  region: 'cn' | 'global'
}

export type ChannelRow = {
  name: string
  traits: string
  scenario: string
  region: 'cn' | 'global'
}
