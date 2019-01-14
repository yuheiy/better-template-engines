import {
  LitElement,
  html,
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module'

export class SiteHeader extends LitElement {
  static get properties() {
    return {
      url: String,
    }
  }

  render() {
    return html`
      <header class="root">
        <nav class="nav">
          ${
            [['Home', '/'], ['Blog', '/blog']].map(([name, href]) => {
              const isCurrent = href === this.url
              return html`
                <li class="navItem">
                  <a
                    class="navLink"
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
}

customElements.define('x-site-header', SiteHeader)
