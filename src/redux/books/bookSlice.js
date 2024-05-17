import { createSlice } from "@reduxjs/toolkit"
import { getRecommendedBooks } from "./operations"

const handelPending = state => {
    state.isLoading = true
};

const handelFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.books = action.payload.results;
    state.totalPages = action.payload.totalPages;
    
};

const handelRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const bookSlice = createSlice({
    name: 'books',
    initialState: {
         books: [],
        totalPages:0,
        isLoading: false,
        error: null,
        
    },
    extraReducers: (builder) => {
        builder.addCase(getRecommendedBooks.pending, handelPending)
            .addCase(getRecommendedBooks.fulfilled, handelFulfilled)
            .addCase(getRecommendedBooks.rejected, handelRejected)
    }
})

export const booksReducer = bookSlice.reducer;