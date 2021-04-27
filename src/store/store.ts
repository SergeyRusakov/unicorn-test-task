import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories.slice';
import shoppingItemsReducer from './shopping-items.slice';
import selectedItemsReducer from './selected-items.slice';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        shoppingItems: shoppingItemsReducer,
        selectedItems: selectedItemsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
