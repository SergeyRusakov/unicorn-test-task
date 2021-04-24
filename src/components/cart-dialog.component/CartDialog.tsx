import React from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import { CartItem } from '../cart-item.component/CartItem';
import { CartStats } from '../cart-stats.component/CartStats';
import { SubmitButton } from '../submit-button.component/SubmitButton';
import './CartDialog.css';

interface CartDialogProps {
    items: SelectedItem[];
}
// TODO Добавить оверлей
export const CartDialog = (props: CartDialogProps) => {

    const cartItems = props.items.map(item => {
        return (
            <li className='cart-dialog__item' key={item.id}>
                <CartItem item={item}/>
            </li>
        )
    });

    return (
        <div className='cart-dialog'>
            <div className="cart-dialog__content">
                <ul className="cart-dialog__items">
                    {cartItems}
                </ul>
            </div>
            <div className="cart-dialog__footer">
                <CartStats/>
                <SubmitButton title={'Оплатить'}/>
            </div>
        </div>
    );

}
