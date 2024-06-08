import React from 'react';
import "./styles/BookCard.css";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  edition_count:number;
  onAddToBookshelf: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, cover, edition_count, onAddToBookshelf }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>Edition Count: {edition_count}</p>
        <button onClick={onAddToBookshelf}>Add to Bookshelf</button>
      </div>
    </div>
  );
};

export default BookCard;