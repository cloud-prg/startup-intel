import { Link } from 'react-router-dom'
import { navItems, siteMeta } from '@/data/nav'

export function HomePage() {
  const sections = navItems.filter((item) => item.path !== '/')

  return (
    <>
      <section className="home-hero" aria-label="站点定位">
        <h1 className="brand">{siteMeta.zhName}</h1>
        <p className="en">{siteMeta.enName}</p>
        <p>{siteMeta.positioning}</p>
        <p style={{ marginTop: '0.75rem' }}>{siteMeta.audience}</p>
      </section>

      <header className="page-head" style={{ marginTop: '1.5rem' }}>
        <p className="page-kicker">Route Map</p>
        <h2 className="page-title" style={{ fontSize: '1.55rem' }}>
          板块地图
        </h2>
        <p className="page-desc">
          按路由分好类。后续你丢链接，直接挂进对应板块即可。优先走：海外调研 →
          模板填表 → 选题池 → 短视频切片。
        </p>
      </header>

      <div className="map-grid">
        {sections.map((item) => (
          <Link className="map-card" to={item.path} key={item.path}>
            <span className="code">{item.short}</span>
            <strong>{item.label}</strong>
            <span>{item.description}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
