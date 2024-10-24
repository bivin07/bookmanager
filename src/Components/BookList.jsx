import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../Redux/bookSlice';




function BookList({setCurrentBook}) {

  const books =useSelector((state)=>state.booksReducer.books)

  const dispatch =useDispatch();
  
  return (


    
  
    <div className=" mt-5">
    <h1 className="text-center">Book's list</h1>
    {books.length === 0 ? (
        <p className="text-center">No books added yet.</p>
    ) : (
        <div className="container d-flex">
            {books.map((book) => (
                <div className="col-md-4 mb-4" key={book.id}>
                    <Card style={{ width: '16rem' }} >
                        <Card.Img variant="top" src={book.image} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.author}</Card.Text>
                            <button    onClick={() => {   alert(`you can edit the book named ${"book.title"} in the input feild`);     setCurrentBook(book);    }} className="btn btn-warning me-2">
                                Edit
                            </button>
                            <button onClick={() => dispatch(deleteBook(book.id))}  className="btn btn-danger">
                                Delete
                            </button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )}
</div>


  )
}

export default BookList
