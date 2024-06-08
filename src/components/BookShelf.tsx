import React, { useEffect, useState } from 'react';

const Bookshelf: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('bookshelf');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  return (
    <div className="bookshelf">
      {books.length === 0 ? (
        <p>No books in your bookshelf.</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.author_name?.[0]}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookshelf;
