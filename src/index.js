import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Adam Wallace (Author), Andy Elkerton (Illustrator)",
    title: "How to dinosaur",
    img: "./amazonBookimg1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];
// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>
// no class in react, its className
// if we want to render something between <Book> </Book> need to use special prop children- name must be like this exactly, is provided by react
function BookList() {
  return (
    <section className="booklist">
      {books.map((element) => {
        return (
          <div>
            <h2> {element.author} </h2>
          </div>
        );
      })}
    </section>
  );
}

//components
// props are objects, it is only display when value is provided
// {job, title, number} destructure in parameter
// {job, title, number} = props destructure as variable
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
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
