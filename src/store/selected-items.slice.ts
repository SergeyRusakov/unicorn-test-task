import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedItem } from '../types/selected-item.type';
import { RootState } from './store';
import { CartStatsValue } from '../types/cart-stats-value.type';
import { ShoppingItem } from '../types/shopping-item.type';

const initialState: SelectedItem[] = [];

const selectedItemsSlice = createSlice({
    initialState,
    name: 'selectedItems',
    reducers: {
        itemAdded: {
            prepare: (item: ShoppingItem, quantity: number) => {
                return {
                    payload: {
                        ...item,
                        quantity,
                        added: new Date().toISOString(),
                    }
                }
            },
            reducer: (state, action: PayloadAction<SelectedItem>) => {
                const item = state.find(item => item.id === action.payload.id);
                if (!item) {
                    state.push(action.payload);
                } else if (item.quantity + action.payload.quantity <= item.available) {
                    item.quantity += action.payload.quantity;
                } else {
                    item.quantity = item.available;
                }
            }
        },
        itemRemoved: (state, action: PayloadAction<SelectedItem>) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== undefined) {
                state.splice(index, 1);
            }
        },
        itemQuantityChanged: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const { id, quantity } = action.payload;
            const index = state.findIndex(item => item.id === id);
            const item = state[index];
            if (item && quantity <= item.available && quantity > 0) {
                item.quantity = quantity;
            }
        },
        allItemsRemoved: (state) => {
            state.splice(0, state.length);
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

export function selectById(state: RootState, id: number): SelectedItem | undefined {
    return state.selectedItems.find(item => item.id === id);
}

export function selectAll(state: RootState): SelectedItem[] {
    return state.selectedItems;
}

export const { itemAdded, itemRemoved, allItemsRemoved, itemQuantityChanged } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
