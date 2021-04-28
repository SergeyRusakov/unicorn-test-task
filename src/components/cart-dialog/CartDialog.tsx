import React, { useState } from 'react';
import { CartItem } from '../cart-item/CartItem';
import { CartStats } from '../cart-stats/CartStats';
import { SubmitButton } from '../submit-button/SubmitButton';
import './CartDialog.css';
import { AppDialog } from '../app-dialog/AppDialog';
import { PaymentDialog } from '../payment-dialog/PaymentDialog';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// TODO Добавить оверлей
export const CartDialog = () => {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const selectedItems = useSelector((state: RootState) => state.selectedItems);

    const cartItems = selectedItems.map(item => {
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
