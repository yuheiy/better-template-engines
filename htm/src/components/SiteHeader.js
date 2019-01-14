const htm = require('htm')
const vhtml = require('vhtml')

const html = htm.bind(vhtml)

module.exports = ({ url }) => {
  return html`
    <header class="SiteHeader">
      <nav class="SiteHeader__nav">
        ${
          [['Home', '/'], ['Blog', '/blog']].map(([name, href]) => {
            const isCurrent = href === url
            return html`
              <li class="SiteHeader__navItem">
                <a
                  class="SiteHeader__navLink"
                  href=${href}
                  aria-current=${isCurrent && 'page'}
                  >${name}</a
                >
              </li>
            `
          })
        }
      </nav>
    </header>
  `
}
