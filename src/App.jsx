
import { useState } from 'react'
import './App.css'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import Header from './Components/Header'


function App() {
  
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <>
    <Header/>
     <BookForm currentBook={currentBook} setCurrentBook={setCurrentBook}/>

     <BookList setCurrentBook={setCurrentBook}/>
    </>
  )
}

export default App
