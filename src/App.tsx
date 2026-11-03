import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { bilibiliGroups, douyinGroups, tiktokGroups } from '@/data/creators'
import { domesticGroups } from '@/data/domestic'
import { overseasGroups } from '@/data/overseas'
import { toolGroups } from '@/data/tools'
import { HomePage } from '@/pages/HomePage'
import { ResourcePage } from '@/pages/ResourcePage'

const TemplatesPage = lazy(() =>
  import('@/pages/TemplatesPage').then((m) => ({ default: m.TemplatesPage })),
)
const KeywordsPage = lazy(() =>
  import('@/pages/KeywordsPage').then((m) => ({ default: m.KeywordsPage })),
)
const TitlesPage = lazy(() =>
  import('@/pages/TitlesPage').then((m) => ({ default: m.TitlesPage })),
)
const WorkflowPage = lazy(() =>
  import('@/pages/WorkflowPage').then((m) => ({ default: m.WorkflowPage })),
)
const GameDevPage = lazy(() =>
  import('@/pages/GameDevPage').then((m) => ({ default: m.GameDevPage })),
)
const PartnersPage = lazy(() =>
  import('@/pages/PartnersPage').then((m) => ({ default: m.PartnersPage })),
)

function PageFallback() {
  return <p className="page-desc">加载中…</p>
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="overseas"
              element={
                <ResourcePage
                  kicker="Overseas Research"
                  title="海外项目调研网站"
                  description="AI数字变现、数字虚拟化、独立 Side Project 的素材源。先看完整故事与公开营收。"
                  groups={overseasGroups}
                />
              }
            />
            <Route
              path="domestic"
              element={
                <ResourcePage
                  kicker="Domestic News"
                  title="国内行业资讯网站"
                  description="本土 AI 数字产品、国内变现玩法与产业分析。用来做中外对比与本土化论点。"
                  groups={domesticGroups}
                />
              }
            />
            <Route
              path="bilibili"
              element={
                <ResourcePage
                  kicker="Bilibili Craft"
                  title="B站博主参考"
                  description="学长视频叙事、画面焦点、转场逻辑。画面服务观点，拒绝炫技。"
                  groups={bilibiliGroups}
                />
              }
            />
            <Route
              path="douyin"
              element={
                <ResourcePage
                  kicker="Douyin Craft"
                  title="抖音博主参考"
                  description="竖屏钩子、蒙版、焦点与短片段剪辑。跳过剧情/情感类案例。"
                  groups={douyinGroups}
                />
              }
            />
            <Route
              path="tiktok"
              element={
                <ResourcePage
                  kicker="TikTok Reference"
                  title="TikTok 参考账号"
                  description="只参考海外独立产品叙事风格，不学中文剪辑套路。"
                  groups={tiktokGroups}
                />
              }
            />
            <Route
              path="tools"
              element={
                <ResourcePage
                  kicker="Editing Tools"
                  title="视频剪辑工具"
                  description="当前主工具清单，后续可继续往这里加。"
                  groups={toolGroups}
                />
              }
            />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="keywords" element={<KeywordsPage />} />
            <Route path="titles" element={<TitlesPage />} />
            <Route path="workflow" element={<WorkflowPage />} />
            <Route path="gamedev" element={<GameDevPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
