import React, { useState } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import { CartItem } from '../cart-item/CartItem';
import { CartStats } from '../cart-stats/CartStats';
import { SubmitButton } from '../submit-button/SubmitButton';
import './CartDialog.css';
import { AppDialog } from '../app-dialog/AppDialog';
import { PaymentDialog } from '../payment-dialog/PaymentDialog';

interface CartDialogProps {
    items: SelectedItem[];
}
// TODO Добавить оверлей
export const CartDialog = (props: CartDialogProps) => {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const cartItems = props.items.map(item => {
        return (
            <li className='cart-dialog__item' key={item.id}>
                <CartItem item={item}/>
            </li>
        )
    });

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const handleSubmitButton = () => {
        setDialogOpen(true);
    }

    return (
        <div className='cart-dialog'>
            <div className="cart-dialog__content">
                <ul className="cart-dialog__items">
                    {cartItems}
                </ul>
            </div>
            <div className="cart-dialog__footer">
                <CartStats/>
                <SubmitButton onClick={handleSubmitButton}>
                    Оплатить
                </SubmitButton>
            </div>
            <AppDialog isOpen={isDialogOpen}
                       afterClose={handleDialogClose}>
                <PaymentDialog/>
            </AppDialog>
        </div>
    );

}
