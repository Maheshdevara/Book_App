import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null); // State to manage the book being edited

    const addBook = (newBook) => {
        setBooks([...books, newBook]); // Add new book
    };

    const updateBook = (updatedBook) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book))); // Update existing book
        setEditingBook(null); // Reset editing state
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id)); // Delete book by ID
    };

    return (
        <div>
            <BookForm addBook={addBook} updateBook={updateBook} editingBook={editingBook} />
            <BookList books={books} deleteBook={deleteBook} setEditingBook={setEditingBook} />
        </div>
    );
};

export default App;
