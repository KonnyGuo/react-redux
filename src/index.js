import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";
// using jsx, always need to return single element (parent)
// <></> or <React.Fragment></React.Fragment>
// no class in react, its className
// if we want to render something between <Book> </Book> need to use special prop children- name must be like this exactly, is provided by react
function BookList() {
  // const getBook = (id) => {
  //   const bookByID = books.find((element) => {
  //     return element.id === id;
  //   });
  //   console.log(bookByID);
  //   return bookByID;
  // };
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, id } = book;
        // always remember key value to be put somewhere
        // return <Book img={img} title={title} author={author} key={id} />;
        // return <Book {...book} key={book.id} getBookProp={getBook} />;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

//root for html id
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
