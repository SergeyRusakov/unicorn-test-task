import { createSlice } from '@reduxjs/toolkit';
import { categoriesJSON } from './inital-state.data';
import { Category } from '../types/category.type';

const initialState = JSON.parse(categoriesJSON) as Category[];

const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {},
});

export default categoriesSlice.reducer;
