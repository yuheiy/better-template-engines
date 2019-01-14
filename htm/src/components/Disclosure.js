const htm = require('htm')
const vhtml = require('vhtml')
const { ulid } = require('ulid')

const html = htm.bind(vhtml)

module.exports = ({
  rootClass = '',
  initialExpanded = false,
  summaryContent,
  detailsId = ulid(),
  children,
}) => {
  return html`
    <div class=${`Disclosure ${rootClass}`} role="group">
      <button
        class="Disclosure__summary"
        type="button"
        aria-expanded=${String(initialExpanded)}
        aria-controls=${detailsId}
      >
        ${summaryContent}
      </button>
      <div
        id=${detailsId}
        class="Disclosure__details"
        hidden=${!initialExpanded && 'hidden'}
      >
        ${children}
      </div>
    </div>
  `
}
