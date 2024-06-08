# My Bookshelf

My Bookshelf is a React application that allows users to search for books using the Open Library API and add them to a personal bookshelf. The personal bookshelf is stored in the browser's localStorage to ensure persistence across sessions.

## Features

- **Search for Books**: Users can search for books by typing in the search input field. The search results are fetched in real-time from the Open Library API.
- **Add to Bookshelf**: Users can add books from the search results to their personal bookshelf.
- **View Bookshelf**: Users can view their personal bookshelf, which is stored in localStorage and persists across sessions.
- **Navigation**: Users can navigate between the search page and the bookshelf page.
- **Notifications**: Toast notifications using `react-hot-toast` to provide feedback on user actions.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **TypeScript**: A statically typed superset of JavaScript.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **react-hot-toast**: A library for showing notifications.

## Project Setup

### Prerequisites

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)

### Getting Started

1. **Clone the Repository**:

   - git clone https://github.com/your-username/my-bookshelf.git
   - cd my-bookshelf

2. **Install Dependencies**:
    - npm install

3. **Run the Development Server**:
    - npm run dev

4. **Build for Production**:
    - npm run build

5. **Build for Production**:
    - npm run preview

## Components
### BookCard.tsx
- A component that displays individual book information and provides a button to add the book to the bookshelf.

### SearchResults.tsx
- A component that displays the search results in a list of BookCard components.

### Bookshelf.tsx
- A component that displays the books stored in the user's personal bookshelf.

### SearchPage.tsx
- A page component that contains the search input and displays the search results.

### BookshelfPage.tsx
- A page component that displays the user's personal bookshelf.

## Usage
- Search for Books: Navigate to the search page and type in the search input to find books.
- Add to Bookshelf: Click on the "Add to Bookshelf" button on a book card to add the book to your bookshelf.
- View Bookshelf: Navigate to the bookshelf page to view your personal bookshelf.