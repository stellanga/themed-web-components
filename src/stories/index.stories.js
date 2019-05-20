// TODO: add demo stories
import { storiesOf } from '@storybook/polymer';
import {html} from 'lit-html';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import '../outcome/OutcomeElement.js';

let stories = storiesOf("Outcome button - row layout", module);
stories.addDecorator(withKnobs);


stories.add("default", () => html`
    <outcome-element primaryLabel="Liverpool" secondaryLabel="(+1)" odds="2.35"></outcome-element>
`);