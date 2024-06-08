import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from '../components/SearchResults';
import "./styles/SearchPage.css";

import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
      if(!response){
         toast.error("Something went wrong!");
      }
      setResults(response.data.docs);

    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book: any) => {
    const storedBooks = localStorage.getItem('bookshelf');
    const books = storedBooks ? JSON.parse(storedBooks) : [];
    books.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(books));
    toast.success(`${book.title} is added to Shelf.`)
    
  };

  const handlClick = () => {
      navigate("/bookshelf");
  }

  return (
    <div className="search-page">
      <h1>Search Book By Name</h1>
      <div>
        <input type="text" value={query} onChange={handleInputChange} placeholder="Search for a book" />
        <button onClick={handlClick}>Go to My Bookshelf</button>
      </div>
      <SearchResults results={results} onAddToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
