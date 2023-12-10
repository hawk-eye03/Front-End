// heading (React.createElement) is just an object (js object) (which has attributes and children) and not an html element
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);
// Copied from chatGPT
/*
In React, the third argument (children) can take various forms:
String: When you pass a string as the third argument, it represents a text node inside the element.
React element: When you pass another React.createElement call as the third argument, you are nesting elements, creating a hierarchy.
Array: You can also pass an array of elements as the third argument, allowing you to include multiple children.
This flexibility in the third argument allows you to compose complex component hierarchies in a declarative manner using JavaScript.
*/
// we can pass either direct string to the argument or we can pass, react.createElement inside it, or we can pass any array of react.createElement
const parent = React.createElement("div", { id: "container1" }, [
  React.createElement("div", { id: "container2" }, [
    React.createElement("h1", {}, "This is a child"),
    React.createElement("h2", {}, "This is a sibling child"),
  ]),
  React.createElement("div", { id: "container2" }, [
    React.createElement("h1", {}, "This is a child"),
    React.createElement("h2", {}, "This is a sibling child"),
  ]),
]);

console.log(parent);
//   For rendering root element we use ReactDOM instead of simple React
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a js object to render, which will convert "h1" and other parameters to html tag and also
root.render(parent);

// React is the core library that deals with the logic of components, state, and the virtual DOM.
// ReactDOM is the package responsible for rendering React components into the actual DOM.
