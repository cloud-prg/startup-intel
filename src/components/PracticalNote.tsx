function normalizeQq(qq?: string | string[]): string[] {
  if (!qq) return []
  return (Array.isArray(qq) ? qq : [qq]).map((id) => id.trim()).filter(Boolean)
}

type LinkedLabelProps = {
  name: string
  url?: string
}

export function LinkedLabel({ name, url }: LinkedLabelProps) {
  if (!url) {
    return <strong>{name}</strong>
  }

  return (
    <strong>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {name}
      </a>
    </strong>
  )
}

type PracticalNoteProps = {
  text: string
  qq?: string | string[]
  joinNote?: string
}

export function PracticalNote({ text, qq, joinNote }: PracticalNoteProps) {
  const groups = normalizeQq(qq)

  return (
    <div className="cell-stack">
      <p className="cell-note">{text}</p>
      {groups.length > 0 ? (
        <div className="chip-row">
          {groups.map((id) => (
            <span className="chip" key={id}>
              QQ {id}
            </span>
          ))}
        </div>
      ) : null}
      {joinNote ? <p className="cell-join">{joinNote}</p> : null}
    </div>
  )
}
