type PageHeaderProps = {
  kicker: string
  title: string
  description: string
}

export function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <header className="page-head">
      <p className="page-kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-desc">{description}</p>
    </header>
  )
}
