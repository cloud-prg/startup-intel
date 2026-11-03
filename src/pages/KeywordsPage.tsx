import { PageHeader } from '@/components/PageHeader'
import { keywordBuckets } from '@/data/keywords'

export function KeywordsPage() {
  return (
    <>
      <PageHeader
        kicker="Keywords"
        title="关键词词库"
        description="海外检索词 + B站/抖音标题与标签。写标题前先扫一遍对应桶。"
      />
      <div className="keyword-grid">
        {keywordBuckets.map((bucket) => (
          <section className="keyword-card" key={bucket.id}>
            <h2>{bucket.title}</h2>
            <div className="tag-cloud">
              {bucket.items.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
