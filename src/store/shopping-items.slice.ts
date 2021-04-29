import { createSlice } from '@reduxjs/toolkit';
import { itemsJSON } from '../data/inital-state.data';
import { ShoppingItem } from '../types/shopping-item.type';
import { RootState } from './store';
import { Selector } from 'react-redux';

const initialState = JSON.parse(itemsJSON) as ShoppingItem[];
// TODO Имитировать получение по api
const shoppingItemsSlice = createSlice({
    initialState,
    name: 'shoppingItems',
    reducers: {},
});

export function selectByCategoryId(categoryId: number): Selector<RootState, ShoppingItem[]> {
    return (state: RootState) => (
        state.shoppingItems.filter(item => item.categoryId === categoryId)
    );
}

export default shoppingItemsSlice.reducer;
