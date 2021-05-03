import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { categoriesJSON } from '../data/inital-state.data';
import { Category } from '../types/category.type';
import { RootState } from './store';
import { FetchStatus } from '../types/fetch-status.type';

const initialState = {
    categories: [] as Category[],
    status: 'idle' as FetchStatus,
    error: '',
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(categoriesJSON))
        }, 500);
    }) as Category[];
});

const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'success';
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.pending, state => {
            state.status = 'loading';
        });
        builder.addCase(fetchCategories.rejected, state => {
            state.status = 'error';
            state.error = 'Не удалость загрузить данные';
        });
    },
});

export function selectAllCategories(state: RootState): Category[] {
    return state.categories.categories;
}

export default categoriesSlice.reducer;
