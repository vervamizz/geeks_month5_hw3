import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный thunk для получения данных
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        filterByTitle: (state, action) => {
            const query = action.payload.toLowerCase();
            state.items = state.items.filter(item => item.title.toLowerCase().includes(query));
        },
        resetData: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { filterByTitle, resetData } = dataSlice.actions;
export default dataSlice.reducer;
