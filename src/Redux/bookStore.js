import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './bookSlice'


const bookStore =configureStore({
    reducer:{
        booksReducer:bookSlice
    }
})

export default bookStore