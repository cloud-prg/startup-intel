import { PageHeader } from '@/components/PageHeader'
import { titlePatterns } from '@/data/titles'

export function TitlesPage() {
  return (
    <>
      <PageHeader
        kicker="Titles & Covers"
        title="标题与封面文案"
        description="B站长视频偏深度，抖音短视频偏冲突钩子。封面少字、观点先行。"
      />
      <div className="panel-grid">
        {titlePatterns.map((block) => (
          <section className="panel" key={block.id}>
            <div className="panel-head">
              <h2>{block.title}</h2>
              <span className="meta">{block.patterns.length} 套</span>
            </div>
            <ul className="rule-list">
              {block.patterns.map((pattern, index) => (
                <li key={pattern}>
                  <span className="rule-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{pattern}</span>
                </li>
              ))}
            </ul>
            {block.examples?.length ? (
              <div style={{ padding: '0 1.1rem 1.1rem' }}>
                <div className="field">
                  <span className="field-label">示例</span>
                  {block.examples.map((ex) => (
                    <p key={ex} style={{ marginTop: '0.35rem' }}>
                      {ex}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </>
  )
}
