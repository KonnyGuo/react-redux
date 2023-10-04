import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>
// no class in react, its className
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

//components
const Book = () => {
  const title = "How to Catch a Dinosaur";
  return (
    <article className="book">
      <img src="amazonBookimg1.jpg" alt="How to Catch a Dinosaur" />
      <h2> {title} </h2>
      <Author />
    </article>
  );
};

const Author = () => {
  const author = "Adam Wallace (Author), Andy Elkerton (Illustrator)";
  // creating obj instead of passing style directly
  const inlneHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlneHeadingStyles}>{author}</h4>;
};

// need {{}} double curlies for objects
// external lib use inline css, need to modify inline style
// const Author = () => {
//   return (
//     <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//       {" "}
//       Adam Wallace (Author), Andy Elkerton (Illustrator){" "}
//     </h4>
//   );
// };

//root for html id
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
