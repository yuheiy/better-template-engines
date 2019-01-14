import React from 'react'
import { SiteHeader } from './SiteHeader'

type Props = {
  url: string
  title: string
}

export const Layout: React.SFC<Props> = ({ url, title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>
        <SiteHeader url={url} />
        <main>{children}</main>
      </body>
    </html>
  )
}
