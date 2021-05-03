import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ShoppingItem } from '../types/shopping-item.type';
import { RootState } from './store';
import { FetchStatus } from '../types/fetch-status.type';
import { itemsJSON } from '../data/inital-state.data';

interface ShoppingItemsState {
    shoppingItems: ShoppingItem[];
    itemDetails?: ShoppingItem;
    status: FetchStatus;
    error?: string;
    detailsFetchStatus: FetchStatus;
}

const initialState: ShoppingItemsState = {
    shoppingItems: [],
    status: 'idle',
    detailsFetchStatus: 'idle',
};

export const fetchShoppingItemsByCategoryId = createAsyncThunk('shoppingItems/fetchByCategoryId', async (categoryId: number) => {
    return await new Promise<ShoppingItem[]>(resolve => {
        setTimeout(() => {
            const items = JSON.parse(itemsJSON) as ShoppingItem[];
            const categoryItems = items.filter(item => item.categoryId === categoryId);
            resolve(categoryItems);
        }, 500);
    });
});

export const fetchShoppingItemDetails = createAsyncThunk('shoppingItems/fetchDetails', async (itemId: number) => {
    return await new Promise<ShoppingItem>((resolve, reject) => {
        setTimeout(() => {
            const items = JSON.parse(itemsJSON) as ShoppingItem[];
            const itemDetails = items.find(item => item.id === itemId);
            itemDetails ? resolve(itemDetails) : reject();
        }, 500);
    }) as ShoppingItem;
});

const shoppingItemsSlice = createSlice({
    initialState,
    name: 'shoppingItems',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchShoppingItemsByCategoryId.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchShoppingItemsByCategoryId.fulfilled, (state, action) => {
            state.status = 'success';
            state.shoppingItems = action.payload;
        });
        builder.addCase(fetchShoppingItemsByCategoryId.rejected, (state) => {
            state.status = 'error';
            state.error = 'Не удалость загрузить данные';
        });
        builder.addCase(fetchShoppingItemDetails.pending, (state) => {
            state.detailsFetchStatus = 'loading';
        });
        builder.addCase(fetchShoppingItemDetails.fulfilled, (state, action) => {
            state.detailsFetchStatus = 'success';
            state.itemDetails = action.payload;
        });
        builder.addCase(fetchShoppingItemDetails.rejected, (state) => {
            state.status = 'error';
            state.error = 'Не удалость загрузить данные';
        });
    }
});

export function selectAllShoppingItems(state: RootState): ShoppingItem[] {
    return state.shoppingItems.shoppingItems;
}

export default shoppingItemsSlice.reducer;
