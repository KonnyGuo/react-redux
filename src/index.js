import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>

function Greeting() {
  // provide 3 things, element want to create, props, value inside element
  // return React.createElement("h2", {}, "First Component");
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "First Component")
  );
}

export default Greeting;

//root for html id
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
