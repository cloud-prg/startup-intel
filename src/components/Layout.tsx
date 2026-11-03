import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { navItems, siteMeta } from '@/data/nav'

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main">
        跳到内容
      </a>
      <div className={`app-shell${open ? ' sidebar-open' : ''}`}>
        <aside className={`sidebar${open ? ' open' : ''}`} aria-label="主导航">
          <div className="brand-block">
            <p className="brand-kicker">Personal Desk</p>
            <p className="brand-title">{siteMeta.zhName}</p>
            <p className="brand-en">{siteMeta.enName}</p>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '收起导航' : '展开导航'}
          </button>

          <ul className="nav-list" id="primary-nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive || (item.path !== '/' && location.pathname.startsWith(item.path)) ? ' active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-short">{item.short}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main" id="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
