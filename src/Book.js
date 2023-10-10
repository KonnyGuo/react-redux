// events obj - common e.target -> refers to element with all its attributes
// e.target.name -> refers to name = "" thing inside name attribute
// e.target.value -> refers to value you put into the form, input, etc
// e.preventDefault() to handle form submssion by ourself

//components
// props are objects, it is only display when value is provided
// {job, title, number} destructure in parameter
// {job, title, number} = props destructure as variable
const Book = ({ img, title, author }) => {
  // second component is not get id from first one
  // we are not invoking it with onClick ={getBookProp(id)} and passing it as getSingleBook instead
  // second method listed below
  // const getSingleBook = () => {
  //   getBookProp(id);
  // };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}> Click this</button> */}
      {/* <button onClick={() => getBookProp(id)}> Click this</button> */}
      {/* approach 2 above */}

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

export default Book;
