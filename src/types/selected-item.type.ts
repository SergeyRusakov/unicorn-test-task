import { ShoppingItem } from './shopping-item.type';

export interface SelectedItem extends ShoppingItem {
    quantity: number;
}
