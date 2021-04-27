import React, { ReactNode } from 'react';
import './HeaderCart.css';
import { CartStats } from '../cart-stats/CartStats';
import { CartDialog } from '../cart-dialog/CartDialog';

// TODO Переделать на функциональный компонент с хуками

interface HeaderCartState {
    isCartDialogOpen: boolean;
}

export class HeaderCart extends React.Component<any, HeaderCartState> {
    // TODO Переделать с тоггла на открытие, так как закрываться будет по оверлею
    public handleTitleClick = () => {
        this.setState((state) => ({
            isCartDialogOpen: !state.isCartDialogOpen
        }));
    }

    constructor(props: any) {
        super(props);
        this.state = {
            isCartDialogOpen: false,
        };
    }

    public render(): ReactNode {
        return (
            <div className='header-cart'>

                <div className='header-cart__title'
                     onClick={this.handleTitleClick}>
                    Корзина
                </div>

                <div className='header-cart__info'>
                    <CartStats/>
                </div>

                <div className='header-cart__cart-dialog'>
                    {this.state.isCartDialogOpen && <CartDialog/>}
                </div>

            </div>
        );
    }

}
