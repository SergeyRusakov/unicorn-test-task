import React, { useState } from 'react';
import { CartItem } from '../cart-item/CartItem';
import { CartStats } from '../cart-stats/CartStats';
import { SubmitButton } from '../submit-button/SubmitButton';
import './CartDialog.css';
import { AppDialog } from '../app-dialog/AppDialog';
import { PaymentDialog } from '../payment-dialog/PaymentDialog';
import { useSelector } from 'react-redux';
import { selectAll } from '../../store/selected-items.slice';

// TODO Добавить оверлей
export const CartDialog = () => {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const selectedItems = useSelector(selectAll);

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

    const isSubmitButtonDisabled = () => {
        return !(selectedItems?.length);
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
                <SubmitButton disabled={isSubmitButtonDisabled()}
                              onClick={handleSubmitButton}>
                    Оплатить
                </SubmitButton>
            </div>

            <AppDialog isOpen={isDialogOpen}
                       afterClose={handleDialogClose}>
                <PaymentDialog selectedItems={selectedItems}/>
            </AppDialog>

        </div>
    );

}
