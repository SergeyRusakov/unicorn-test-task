import React, { useState } from 'react';
import './HeaderCart.css';
import { CartStats } from '../cart-stats/CartStats';
import { CartDialog } from '../cart-dialog/CartDialog';

// TODO Переделать на функциональный компонент с хуками
export const HeaderCart = () => {

    const [isCartDialogOpen, setCardDialogOpen] = useState(false);

    const handleTitleClick = () => {
        setCardDialogOpen(!isCartDialogOpen);
    }

    return (
        <div className='header-cart'>

            <div className='header-cart__title'
                 onClick={handleTitleClick}>
                Корзина
            </div>

            <div className='header-cart__info'>
                <CartStats/>
            </div>

            <div className='header-cart__cart-dialog'>
                {isCartDialogOpen && <CartDialog/>}
            </div>

        </div>
    );

}
