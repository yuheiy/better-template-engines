import React from 'react'

type Props = {
  url: string
}

export const SiteHeader: React.SFC<Props> = ({ url }) => {
  return (
    <header className="SiteHeader">
      <nav className="SiteHeader__nav">
        <ul className="SiteHeader__navList">
          {[['Home', '/'], ['Blog', '/blog']].map(([name, href], index) => {
            const isCurrent = href === url
            return (
              <li key={index} className="SiteHeader__navItem">
                <a
                  className="SiteHeader__navLink"
                  href={href}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
