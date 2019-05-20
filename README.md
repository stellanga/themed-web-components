# \<themed-web-components\>

## Styling
:host will style <test-element> from inside the component
Adding !important will block any style from the light-dom to penetrate so
```
test-element {
    background: red;
}
```
will **not** have any effect
CSS variables pierces the shadow-dom