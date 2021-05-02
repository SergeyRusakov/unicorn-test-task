import { createSlice } from '@reduxjs/toolkit';
import { categoriesJSON } from '../data/inital-state.data';
import { Category } from '../types/category.type';
import { RootState } from './store';

const initialState = JSON.parse(categoriesJSON) as Category[];

const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {},
});

export function selectAllCategories(state: RootState): Category[] {
    return state.categories;
}

export default categoriesSlice.reducer;
