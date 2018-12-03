// Lines 4–7 we are using the ReactDOM package render method to mount a node into our DOM.
// The node to be mounted is the <div>Hello World</div> found on line 5.
// On line 6 we are referring to the element into which we want ReactDOM to insert our React component.
// The element id is app. If you remember, we do not have any element with and id of ‘app’ in our index.html file (in our public directory).
// We need to add that now along with a script tag pointing to our bundle.js file.
// Just update your index.html file with what you have below:

import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import './styles/main.css'; // import our external css file

// using the render method, we will mount this node into our DOM (html file) on the element with
// id of 'app'
ReactDOM.render(
  <div> Hello World</div>,
  document.getElementById('app')
);
