import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Adam Wallace (Author), Andy Elkerton (Illustrator)",
    title: "How to dinosaur",
    img: "./amazonBookimg1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>
// no class in react, its className
// if we want to render something between <Book> </Book> need to use special prop children- name must be like this exactly, is provided by react
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, id } = book;
        // always remember key value to be put somewhere
        // return <Book img={img} title={title} author={author} key={id} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

// events obj - common e.target -> refers to element with all its attributes
// e.target.name -> refers to name = "" thing inside name attribute
// e.target.value -> refers to value you put into the form, input, etc
// e.preventDefault() to handle form submssion by ourself

//components
// props are objects, it is only display when value is provided
// {job, title, number} destructure in parameter
// {job, title, number} = props destructure as variable
const Book = ({ img, title, author }) => {
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}> Display Title</button>
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
