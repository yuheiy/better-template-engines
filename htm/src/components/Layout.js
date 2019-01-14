const htm = require('htm')
const vhtml = require('vhtml')
const SiteHeader = require('./SiteHeader')

const html = htm.bind(vhtml)

module.exports = ({ url, title, children }) => {
  return html`
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
      </head>
      <body>
        <${SiteHeader} url=${url} />
        <main>${children}</main>
      </body>
    </html>
  `
}
