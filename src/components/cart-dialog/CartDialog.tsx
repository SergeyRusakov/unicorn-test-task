import React, { useState } from 'react';
import { CartItem } from '../cart-item/CartItem';
import { CartStats } from '../cart-stats/CartStats';
import { SubmitButton } from '../submit-button/SubmitButton';
import './CartDialog.css';
import { AppDialog } from '../app-dialog/AppDialog';
import { PaymentDialog } from '../payment-dialog/PaymentDialog';
import { useDispatch, useSelector } from 'react-redux';
import { allItemsRemoved, selectAll } from '../../store/selected-items.slice';

interface HeaderCartProps {
    afterClose: () => void;
}

// TODO Добавить оверлей
export const CartDialog = (props: HeaderCartProps) => {

    const [isDialogOpen, setDialogOpen] = useState(false);
    const selectedItems = useSelector(selectAll);
    const dispatch = useDispatch();

    const cartItems = selectedItems.map(item => {
        return (
            <li className='cart-dialog__item' key={item.id}>
                <CartItem item={item}/>
            </li>
        )
    });

    const handlePaymentDialogClose = () => {
        setDialogOpen(false);
    }

    const handleSubmitButton = () => {
        setDialogOpen(true);
    }

    const isSubmitButtonDisabled = () => {
        return !(selectedItems?.length);
    }

    const handleOverlayClick = () => {
        props.afterClose();
    }

    const afterPaymentSuccess = () =>{
        dispatch(allItemsRemoved());
    }

    return (
        <div className='cart-dialog'>

            <div className="cart-dialog__content">

                <ul className="cart-dialog__items">
                    {cartItems}
                </ul>

                <div className="cart-dialog__footer">
                    <CartStats/>
                    <SubmitButton disabled={isSubmitButtonDisabled()}
                                  onClick={handleSubmitButton}>
                        Оплатить
                    </SubmitButton>
                </div>

            </div>

            <AppDialog isOpen={isDialogOpen}
                       afterClose={handlePaymentDialogClose}>
                <PaymentDialog afterPaymentSuccess={afterPaymentSuccess}
                               selectedItems={selectedItems}/>
            </AppDialog>

            <div className="cart-dialog__overlay"
                 onClick={handleOverlayClick}>
            </div>

        </div>
    );

}
