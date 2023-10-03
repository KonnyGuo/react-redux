import React from "react";
import ReactDOM from "react-dom/client";

// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

//components
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

//implict return
const Image = () => <h2> Image placeholder</h2>;
const Title = () => <h2> Book Title</h2>;
const Author = () => {
  return <h4> Author </h4>;
};

//root for html id
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
