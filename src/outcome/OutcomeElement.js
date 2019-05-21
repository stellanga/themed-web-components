import { LitElement, html, css } from 'lit-element';

class OutcomeElement extends LitElement {

  static get styles() {
    return css`
        
        :host {
            display: inline;
            contain: content; // https://developers.google.com/web/fundamentals/web-components/shadowdom#stylefromoutside
        }

        button {
            width: 100%;
            min-width: 64px;
            max-width: 124px;
            overflow: hidden;
            outline: none;
            
            border: 0;
            border-radius: 2px;
            
            padding: 8px;
            background-color: var(--outcome-button-backgroundColor);
            color: white;
            fontSize: 0.75rem
        }

        button:hover {
            cursor: pointer;
            background-color: var( --outcome-button-backgroundColor-hover);
        }

        :host([selected]) button {
            color: black;
            background-color: var(--outcome-button-selected-backgroundColor);
        }

        :host([selected]) button:hover {
            background-color: var(--outcome-button-selected-backgroundColor-hover);
        }

        :host([disabled]) button {
            color: gray;
            background-color: rgba(0, 0, 0, .24);
        }
        
        :host([disabled]) button:hover {
            cursor: default;
        }

        .wrapper {
            display: flex;
            width: 100%;
            flex-wrap: nowrap;
        }

        :host([layout="ROW"]) .wrapper,
        :host([layout="ROW-CENTERED"]) .wrapper {
            flex-direction: row;
        }

        :host([layout="STACK"]) .wrapper {
            flex-direction: column-reverse;
        }

        :host([layout="ROW"]) .wrapper,
        :host([layout="STACK"]) .wrapper {
            justify-content: space-between;
        }

        :host([layout="ROW-CENTERED"]) .wrapper {
            justify-content: center;
        }

        .labelAndInfo {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            min-height: 1rem; // this should be relative to font-size?
        }

        :host([layout="ROW"]) .labelAndInfo,
        :host([layout="ROW-CENTERED"]) .labelAndInfo {
            justify-content: flex-start;
        }

        :host([layout="STACK"]) .labelAndInfo {
            justify-content: center;
        }

        :host([layout="ROW"]) .wrapper,
        :host([layout="STACK"]) .wrapper {
           padding-right: 4px;
        }

        :host([layout="ROW-CENTERED"]) .wrapper {
            padding-right: none;
        }

        .label {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .info {
            overflow: visible;
            padding-left: 0.125rem;
        }
        
        .oddsWrapper {
            display: flex;
        }

        :host([layout="ROW"]) .oddsWrapper,
        :host([layout="ROW-CENTERED"]) .oddsWrapper {
            justify-content: flex-start;
        }

        :host([layout="STACK"]) .oddsWrapper {
            justify-content: center;
        }

        .odds {
            min-height: 1rem; 
            position: relative;
            font-weight: bold;
            margin-right: 0;   
            visibility: visible;
        }

        :host([disabled]) .odds {
            visibility: hidden;
        }

        :host([oddsIncrease][layout="STACK"]) .odds,
        :host([oddsDecrease][layout="STACK"]) .odds,
        :host([oddsIncrease][layout="ROW-CENTERED"]) .odds,
        :host([oddsDecrease][layout="ROW-CENTERED"]) .odds {
           margin-right: 8px;
        }

        .oddsIndicator {
            width: 6px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 2px;
        }

        :host([disabled][oddsDecrease]) .oddsIndicator,
        :host([disabled][oddsIncrease]) .oddsIndicator {
            display: none;
        }

        .oddsIncrease {
            fill: green;    
        }

        .oddsDecrease {
            fill: red;
        }

        :host([persistedOdds]) .oddsIncrease,
        :host([persistedOdds]) .oddsDecrease {
            fill: white;
        }
    `;
  }

  constructor() {
      super();
      this.layout = "ROW";
      this.primaryLabel = "";
      this.secondaryLabel = "";
      this.odds = "";
      this.selected = false;
      this.disabled = false;
      this.oddsIncrease = false;
      this.oddsDecrease = false;
      this.persistedOdds = false;
  }

  static get properties() {
    return { 
        primaryLabel: { type: String },
        secondaryLabel: { type: String },
        odds: { type: String },
        selected: { type: Boolean },
        disabled: { type: Boolean },
        layout: { type: String },
        oddsIncrease: { type: Boolean },
        oddsDecrease: { type: Boolean },
        persistedOdds: { type: Boolean }
    };
  }

  handleClick(e) {
      console.log('Clicked button - ', this)
  }

  render() {
    return html`
        <button role="button" type="button" @click="${this.handleClick}">
            <div class="wrapper">
                <div class="labelAndInfo">
                    <div class="label">${this.primaryLabel}</div>
                    <div class="info">${this.secondaryLabel}</div>
                </div>
                <div class="oddsWrapper">
                    <div class="oddsIndicator">
                        ${this.oddsIncrease ?
                            html`<svg x="0" y="0" viewBox="0 0 100 80" preserveAspectRatio="none">
                                <polygon points="50 0,100 80, 0 80" class="oddsIncrease" />
                            </svg>` :
                            ''
                        }
                        ${this.oddsDecrease ?
                            html`<svg x="0" y="0" viewBox="0 0 100 80" preserveAspectRatio="none">
                                <polygon points="0 0, 100 0, 50 80" class="oddsDecrease" />
                            </svg>` :
                            ''
                        }
                    </div>
                    <div class="odds">${this.odds}</div>
                </div>
            </div>
            </div>
        </button>
    `;
  }
}

customElements.define('outcome-element', OutcomeElement);