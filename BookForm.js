import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, updateBook, editingBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // Use useEffect to populate form fields when editing a book
    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title);
            setAuthor(editingBook.author);
        } else {
            setTitle('');
            setAuthor('');
        }
    }, [editingBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { 
            id: editingBook ? editingBook.id : Date.now(), // Use timestamp as ID for simplicity
            title, 
            author 
        };
        if (editingBook) {
            updateBook(newBook); // Call updateBook if editing
        } else {
            addBook(newBook); // Call addBook if adding
        }
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Book Title" 
                required 
            />
            <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author" 
                required 
            />
            <button type="submit">{editingBook ? 'Update Book' : 'Add Book'}</button>
        </form>
    );
};

export default BookForm;
