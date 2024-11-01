import React from 'react';

const BookList = ({ books, deleteBook, setEditingBook }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                        <button onClick={() => setEditingBook(book)}>Edit</button>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
