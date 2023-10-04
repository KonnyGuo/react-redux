import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>
// no class in react, its className
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

//components
const Book = () => {
  return (
    <article className="bookList">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

//implict return
const Image = () => (
  <img src="amazonBookimg1.jpg" alt="How to Catch a Dinosaur" />
);
const Title = () => <h2> Book Title</h2>;
const Author = () => {
  return <h4> Adam Wallace (Author), Andy Elkerton (Illustrator) </h4>;
};

//root for html id
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
