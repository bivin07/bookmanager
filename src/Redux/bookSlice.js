import { createSlice } from "@reduxjs/toolkit";


const bookslice= createSlice({

name:"books",
initialState:{
    books:[],
},
reducers:{
    addBook:(state,action)=>{
        state.books.push(action.payload);
        console.log(action.payload)
       
    },
    editBook:(state,action)=>{

         
        const { id, updatedBook } = action.payload;
        const index = state.books.findIndex(book => book.id === id);
       
            state.books[index] =updatedBook;

          
        

    },
    deleteBook:(state,action)=>{
        state.books = state.books.filter((book) => book.id !== action.payload);
        alert("item successfully deleted")
    }

}






}
)
export const {addBook,editBook,deleteBook} =bookslice.actions
export default bookslice.reducer