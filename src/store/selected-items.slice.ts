import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedItem } from '../types/selected-item.type';
import { RootState } from './store';
import { CartStatsValue } from '../types/cart-stats-value.type';

const initialState: SelectedItem[] = [];
// TODO Переименовать все редьюсеры по типу postAdded/postUpdated.
// TODO Добавить редьюсер на изменение полей выбранного товара
// TODO Приделать prepare callback: https://redux.js.org/tutorials/essentials/part-4-using-data (можно записывать дату добавления)
// TODO Добавить селектед айтемам уникальные айдишники
const selectedItemsSlice = createSlice({
    initialState,
    name: 'selectedItems',
    reducers: {
        setItem: (state, action: PayloadAction<SelectedItem>) => {
            const selectedItem = state.find(item => item.id === action.payload.id);
            if (selectedItem) {
                selectedItem.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<SelectedItem>) => {
            console.log('1111');
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== undefined) {
                state.splice(index, 1);
            }
        },
        erase: (state) => {
            state = [];
        },
    },
});

export function selectCartStats(state: RootState): CartStatsValue {
    const stats: CartStatsValue = { sum: 0, quantity: 0 };
    state.selectedItems.forEach(item => {
        const { price, quantity } = item;
        stats.sum += price * quantity;
        stats.quantity += quantity;
    });
    stats.sum = +stats.sum.toFixed(2);
    return stats;
}

export const { setItem, removeItem, erase } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
