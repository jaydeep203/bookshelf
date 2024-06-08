import React from 'react';
import BookCard from './BookCard';

interface SearchResultsProps {
  results: any[];
  onAddToBookshelf: (book: any) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onAddToBookshelf }) => {
  return (
    <div className="search-results">
      {results.map((book) => (
        <BookCard
          key={book.key}
          title={book.title}
          author={book.author_name?.[0]}
          edition_count={book.edition_count}
          cover={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          onAddToBookshelf={() => onAddToBookshelf(book)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
