import { LitElement, html, css } from 'lit-element';
import './outcome/OutcomeElement.js';

class TestElement extends LitElement {

  constructor() {
    super();
    this.buttons = Array(328);
    this.buttons.fill('Button', 0, 328);
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2rem;
      }
      
      div {
        width: 100%;
        height: 100%;
        padding: var(--global-Margin, 2rem);
        align-self: center;
      }
    `;
  } 

  render() {
    return html`
      ${this.buttons.map( i => html`<outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" selected></outcome-element>`)}
    `;
  }
}

customElements.define('test-element', TestElement);