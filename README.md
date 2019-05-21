# <themed-web-components\>

Themed web components try-out using Lit Element
https://lit-element.polymer-project.org/

### Running
Install polymer ```yarn add -g polymer-cli```

Run ```yarn``` to install dependencies

You need to use polymer to serve the app -> ```polymer serve```

Then visit ```localhost:8081```

### Notes on styling
Use ```:host``` to style your ```<custom-element>```

CSS variables pierces the shadow down but only one level deep (to be confirmed) so nesting web components is a bad idea, at least when it comes to styling them via CSS variables.

Defining the variables globally makes the accessible in nested components but it feels fugly to put them all in the same place. I'd like to use something like
```
<style> 
    outcome-element {
        --backgroundColor: var(--globalBackgroundColor, #elementFallbackHex)
    }
</style>
```

You could import / load your own styles in ```render()``` but that will risk FOUC and performance I guess.

One solution could be the pseudo selectors ```::part ::theme```, check out this article 

https://meowni.ca/posts/part-theme-explainer/ by Monica

### Other resources
https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/

https://css-tricks.com/theming-with-variables-globals-and-locals/

https://stackblitz.com/edit/open-wc-lit-demos?file=03-advanced%2F05-shared-styles.js