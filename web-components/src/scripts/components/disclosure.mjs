import {
  LitElement,
  html,
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module'

export class Disclosure extends LitElement {
  static get properties() {
    return {
      expanded: Boolean,
    }
  }

  constructor() {
    super()
    this.expanded = false
  }

  onClickSummary() {
    this.expanded = !this.expanded
  }

  render() {
    return html`
      <div class="root" role="group">
        <button
          class="summary"
          type="button"
          aria-expanded=${this.expanded}
          aria-controls="details"
          @click=${this.onClickSummary}
        >
          <slot name="summary"></slot>
        </button>
        <div id="details" class="details" ?hidden=${!this.expanded}>
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('x-disclosure', Disclosure)
