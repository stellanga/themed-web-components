import { LitElement, html, css } from 'lit-element';

class OutcomeElement extends LitElement {

  static get styles() {
    return css`
        :host {
            display: inline;
            margin: 4px;
        }

        :host([persistedOdds]) .oddsIncrease,
        :host([persistedOdds]) .oddsDecrease {
            fill: white;
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
            background-color: #D291BC;
            color: white;
            fontSize: 0.75rem
        }

        button:hover {
            cursor: pointer;
            background-color: #FEC8D8;
        }

        button:focus {
            background-color: #FFDFD3;
        }

        :host([selected]) button {
            color: black;
            background-color: #feffa3;
        }

        :host([selected]) button:hover {
            background-color: #fafbbc;
        }

        :host([disabled]) button {
            cursor: default;
            color: gray;
            background-color: rgba(0, 0, 0, .24);
        }

        .wrapper {
            display: flex;
            width: 100%;
            flex-wrap: nowrap;
            justify-content: space-between;
            flex-direction: row;
        }

        .labelAndInfo {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            padding-right: 4px;
            min-height: 1rem; // this should be relative to font-size?
            justify-content: flex-start;
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
            justify-content: flex-start;
        }

        .odds {
            min-height: 1rem; 
            position: relative;
            font-weight: bold;
            margin-right: 0;   
            visibility: visible;
        }

        .oddsIndicator {
            width: 6px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 2px;
        }

        .oddsIncrease {
            fill: green;    
        }

        .oddsDecrease {
            fill: red;
        }
    `;
  }

  static get properties() {
    return { 
        primaryLabel: { type: String },
        secondaryLabel: { type: String },
        odds: { type: String },
        selected: { type: Boolean },
        disabled: { type: Boolean },
        // layout: 'ROW',
        oddsIncrease: { type: Boolean },
        oddsDecrease: { type: Boolean } 
    };
  }

  handleClick(e) {
      console.log('Clicked button - ', this.prop)
  }

  render() {
    return html`
        <button role="button" type="button" @click="${this.handleClick}">
            <div class="wrapper">
                <div class="labelAndInfo">
                    <div class="label">${this.primaryLabel}</div>
                    <div class="info">${this.secondaryLabel}</div>
                </div>
                <div class="oddsIndicator">
                    ${this.oddsIncrease ?
                        html`<svg x="0" y="0" viewBox="0 0 100 80" preserveAspectRatio="none">
                            <polygon points="50 0,100 80, 0 80" class="oddsIncrease" />
                        </svg>` :
                        html``
                    }
                    ${this.oddsDecrease ?
                        html`<svg x="0" y="0" viewBox="0 0 100 80" preserveAspectRatio="none">
                            <polygon points="0 0, 100 0, 50 80" class="oddsDecrease" />
                        </svg>` :
                        html``
                    }
                </div>
                <div class="odds">${this.odds}</div>
            </div>
            </div>
        </button>
    `;
  }
}

customElements.define('outcome-element', OutcomeElement);