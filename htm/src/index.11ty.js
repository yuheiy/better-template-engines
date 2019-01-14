const htm = require('htm')
const vhtml = require('vhtml')
const Layout = require('./components/Layout')
const Disclosure = require('./components/Disclosure')

const html = htm.bind(vhtml)

module.exports = class {
  data() {
    return {
      title: 'Home',
    }
  }

  render({ page, title }) {
    return (
      '<!doctype html>' +
      html`
        <${Layout} url=${page.url} title=${title}>
          <${Disclosure}
            rootClass="u-mt5"
            summaryContent=${
              html`
                <span>最高の<em>コンテンツ</em></span>
              `
            }
            ><p>立派なインターネットコンテンツになったなあ。</p><//
          >
        <//>
      `
    )
  }
}
