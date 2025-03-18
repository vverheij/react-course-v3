const Book = ({ img, title, author, id, getBook }) => {
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <button onClick={getSingleBook}>Click Me</button>
    </article>
  );
};
export default Book;
