import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getRecommendedBooks = createAsyncThunk('books/getAll', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/books/recommend')
        console.log(res.data.results)
         return res.data.results;
    }
    catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }
} )