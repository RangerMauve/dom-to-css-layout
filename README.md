# dom-to-css-layout
Converts a tree of DOM elements into a JSON blob compatible with Facebook's [css-layout](https://github.com/facebook/css-layout)

Makes use of [style-to-json](https://github.com/RangerMauve/style-to-json) to parse CSS rules that apply to elements in a tree, and traverses all child nodes of an element to build the full tree. This can then be put into [css-layout](https://github.com/facebook/css-layout) and can be used to do layout with pure JavaScript (for canvas rendering for example) while leveraging the browsers CSSOM and plain old stylesheets and DOM.

For a list of all supported attributes, see [css-layout](https://github.com/facebook/css-layout#supported-attributes). Note that valid units are required in the CSS, but will get stripped during the conversion.

## use
`npm install --save dom-to-css-layout`

index.html

```html
<div id="example" class="parent">
    <div class="child">Text gets ignored</div>
</div>
```

style.css

```css
.parent {padding: 50px;}
.child {padding: 10px; align-self: stretch}
```

index.js

```javascript
var toLayout = require("dom-to-css-layout");
var exampleElement = document.getElementById("example");

var layout = toLayout(exampleElement);
```

Layout will look like

```JSON
{
    "style": {
        "padding": 50
    },
    "children": [{
        "style": {
            "padding": 10,
            "alignSelf": "stretch"
        },
        "children": []
    }]
}
```
