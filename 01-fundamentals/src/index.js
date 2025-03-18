import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
import Book from './Book';

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} getBook={getBook} key={book.id} />;
      })}
    </section>
  );
}
function EventExamples() {
  const handelFormInput = (e) => {
    console.log('e:', e.target);
    console.log('e.target.name:', e.target.name);
    console.log('e.target.value:', e.target.value);
    // console.log('form input handled');
  };
  const handleButtonClick = () => {
    alert('button click handled');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section onSubmit={handleFormSubmission}>
      <form>
        <h2>Typical form</h2>
        <input type="text" name="example" onChange={handelFormInput} style={{ margin: '1rem 0' }} />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={handleButtonClick}>
        Click Me
      </button>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
