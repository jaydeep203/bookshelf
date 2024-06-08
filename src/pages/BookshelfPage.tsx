import React from 'react';
import Bookshelf from '../components/BookShelf';
import "./styles/BookshelfPage.css"

const BookshelfPage: React.FC = () => {


  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
  );
};

export default BookshelfPage;
