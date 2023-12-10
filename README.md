# Front-End

## 101
Q1. What is Emmet?

Emmet is a toolkit for web developers that vastly improves HTML and CSS workflow. It's a shorthand syntax that allows you to write HTML and CSS code more quickly and efficiently. With Emmet, you can use abbreviations and shortcuts to generate code snippets, saving time and reducing the amount of manual typing.

Emmet supports a wide range of abbreviations and commands, making it easy to expand them into complete HTML or CSS structures. For example, you can use Emmet to generate entire HTML documents, create nested elements, apply classes and IDs, and much more with concise and intuitive syntax.

  

Here's a simple example:

  

``` html

<!-- Using Emmet -->

div#container>ul>li.item$*5

  

<!-- Expands to -->

<div  id="container">

<ul>

<li  class="item1"></li>

<li  class="item2"></li>

<li  class="item3"></li>

<li  class="item4"></li>

<li  class="item5"></li>

</ul>

</div>

```
Q2. Difference between a Library and Framework?
### Library:
**Purpose**: A library is a collection of pre-written code or functions that you can use in your program. It provides specific functionality that you can incorporate into your application as needed.

**Control Flow**: When using a library, you have more control over the flow of your application. You choose when and how to use specific functions from the library.

**Inversion of Control**: In a library, you are responsible for the overall architecture and flow of your application. The library is a tool that you can use, but it doesn't dictate the structure of your program.

**Example**: jQuery is a library for JavaScript that simplifies DOM manipulation and event handling. You include it in your project and use its functions when necessary.

  

### Framework:
**Purpose**: A framework is a more comprehensive set of tools, conventions, and guidelines that dictate the overall structure and flow of your application. It provides a scaffolding for your code and enforces a specific architecture.

**Control Flow**: When using a framework, the control flow is often inverted. The framework calls your code at specific points, and you fill in the details. The framework dictates the flow of your application.

**Inversion of Control**: Frameworks follow the principle of inversion of control, where the framework manages the control flow and delegates specific tasks to your code.

**Example**: Django is a web framework for Python that includes an ORM, templating engine, and follows the Model-View-Controller (MVC) architecture. It provides a structured way to build web applications.

**In summary, while both libraries and frameworks provide reusable code, libraries are more focused and give you control over the flow of your application, whereas frameworks provide a more comprehensive structure, often dictating the architecture and managing the control flow of your application. The choice between using a library or a framework depends on the specific needs and goals of your project.**

Q3. What is crossorigin in script tag?

The `crossorigin` attribute is often used when loading third-party scripts or resources to ensure proper security measures. For example, if you're using a Content Delivery Network (CDN) to host a script, using the `crossorigin` attribute appropriately can prevent issues related to cross-origin resource sharing (CORS).
It's important to note that the server hosting the script must also include the appropriate CORS headers in its response for the browser to allow the cross-origin request. These headers include `Access-Control-Allow-Origin` and others, which specify which origins are permitted to access the resource.

  
In summary, the `crossorigin` attribute in a script tag is used to control how browsers handle cross-origin requests for the specified script and can help address security concerns related to loading scripts from different origins.

Q4. What is diference between React and ReactDOM
**React:**

-   The `React` package contains the core functionality of React, including the logic for defining and creating components, managing component state and lifecycle, and handling the virtual DOM.
-   When you write React code, you typically use features from the `React` package, such as `React.createElement`, `useState`, `useEffect`, etc.
-   Example import:

**ReactDOM:**

-   The `ReactDOM` package is responsible for interacting with the DOM (Document Object Model) and rendering React components into the browser.
-   It provides methods like `ReactDOM.render()` to render React elements into a specified container in the DOM.
-   Example import:

Q5. What is difference between react.development.js and react.production.js files via CDN

