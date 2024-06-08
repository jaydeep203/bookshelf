import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import {BiSearch} from "react-icons/bi";
import {GiBookshelf} from "react-icons/gi";

function App() {

  return (
    <main className='main-app'>
      
      <Router>

        <header>
          <div className='header-div'>
            <h1>
              Book Shelf
            </h1>
            <div className='navs'>
                <nav>
                  <BiSearch />
                  <Link to="/" >Search</Link>
                </nav>
                <nav>
                  <GiBookshelf />
                  <Link to="/bookshelf">Book Shelf</Link>
                </nav>
                
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
