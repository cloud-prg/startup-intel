import { CopyButton } from '@/components/CopyButton'
import { PageHeader } from '@/components/PageHeader'
import { templates } from '@/data/templates'

export function TemplatesPage() {
  return (
    <>
      <PageHeader
        kicker="Templates"
        title="全套制作模板"
        description="调研、分镜、短视频脚本、选题池。可一键复制到 Obsidian / 语雀 / 飞书。"
      />
      <div className="template-stack">
        {templates.map((tpl) => (
          <article className="template-card" key={tpl.id}>
            <header>
              <div>
                <h2>{tpl.title}</h2>
                <p className="subtitle">{tpl.subtitle}</p>
              </div>
              <CopyButton text={tpl.body} />
            </header>
            <pre className="template-body">{tpl.body}</pre>
          </article>
        ))}
      </div>
    </>
  )
}
