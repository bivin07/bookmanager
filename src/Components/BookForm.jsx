import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook,editBook } from '../Redux/bookSlice';


function BookForm({ currentBook, setCurrentBook }) {

    const [title, setTitle] = useState(currentBook ? currentBook.title : '' );
    const [author, setAuthor] = useState(currentBook ? currentBook.author : '');
    const [image, setImage] = useState(currentBook ? currentBook.image :'');
    const [id] = useState(currentBook ? currentBook.id :Date.now());


const dispatch =useDispatch()

const handleSubmit =(e)=>{
    e.preventDefault();
    if (currentBook) {
        dispatch(editBook({ id, updatedBook: {id, title, author ,image} }));
    } else {
        dispatch(addBook({id,title,author,image}));
    }
  
};




  return (
    <>
    
<div className='container  mt-1 '>

<div>
  <h1 className='text-center'>Add books</h1>
</div>
 
<div className="row p-2 border text-center">
  
<form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group p-1">
        <input
          type="text"
        
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group p-1">
        <input
          type="text"
          
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group p-1">
        <input
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary"> {currentBook ? 'Edit Book' : 'Add Book'}</button>
    
    </form>

</div>

</div>

      
    </>
  )
}

export default BookForm
