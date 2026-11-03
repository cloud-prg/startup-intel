import { PageHeader } from '@/components/PageHeader'
import { checklists, executionRules } from '@/data/workflow'

export function WorkflowPage() {
  return (
    <>
      <PageHeader
        kicker="Workflow"
        title="浏览制作规则 & 成片自检"
        description="防止无限调研和拖延。成片发布前按清单过一遍。"
      />
      <div className="panel-grid">
        <section className="panel">
          <div className="panel-head">
            <h2>执行规则</h2>
            <span className="meta">{executionRules.length} 条</span>
          </div>
          <ol className="rule-list">
            {executionRules.map((rule, index) => (
              <li key={rule.id}>
                <span className="rule-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{rule.text}</span>
              </li>
            ))}
          </ol>
        </section>

        {checklists.map((group) => (
          <section className="panel" key={group.id}>
            <div className="panel-head">
              <h2>{group.title}</h2>
              <span className="meta">{group.items.length} 项</span>
            </div>
            <ul className="check-list">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="check-box" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
