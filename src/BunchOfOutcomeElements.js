import { LitElement, html, css } from 'lit-element';
import './outcome/OutcomeElement.js';

class BunchOfOutcomeElements extends LitElement {

  constructor() {
    super();
    this.buttons = Array(328);
    this.buttons.fill('Button', 0, 328);

    //       <!-- ${this.buttons.map( i => html`<outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35"></outcome-element>`)} -->
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 2rem;
        background-color: var(--myBackground);
      }
      
      div {
        width: 100%;
        height: 100%;
        padding: 2rem;
        align-self: center;
      }
    `;
  } 

  render() {
    return html`
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW"></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsIncrease></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsDecrease></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsIncrease persistedOdds></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsDecrease persistedOdds></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsIncrease selected></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" oddsDecrease selected></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" disabled></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="ROW" disabled oddsDecrease></outcome-element>

      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK"></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsIncrease></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsDecrease></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsIncrease persistedOdds></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsDecrease persistedOdds></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsIncrease selected></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" oddsDecrease selected></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" disabled></outcome-element>
      <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35" layout="STACK" disabled oddsDecrease></outcome-element>

      <outcome-element odds="2.35" layout="ROW-CENTERED"></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsIncrease></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsDecrease></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsIncrease persistedOdds></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsDecrease persistedOdds></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsIncrease selected></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" oddsDecrease selected></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" disabled></outcome-element>
      <outcome-element odds="2.35" layout="ROW-CENTERED" disabled oddsDecrease></outcome-element>
    `;
  }
}

customElements.define('bunch-of-outcome-elements', BunchOfOutcomeElements);