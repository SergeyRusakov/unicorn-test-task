import React, { ReactNode } from 'react';
import './HeaderCart.css';
import { CartStats } from '../cart-stats.component/CartStats';
import { CartDialog } from '../cart-dialog.component/CartDialog';
import { SelectedItem } from '../../types/selected-item.type';

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
        // TODO убрать замоканные айтемы
        const items: SelectedItem[] = [
            {
                title: 'Товар 1',
                categoryId: 1,
                id: 1,
                price: 123,
                quantity: 5,
            },
            {
                title: 'Товар 1',
                categoryId: 1,
                id: 1,
                price: 123,
                quantity: 5,
            },
            {
                title: 'Товар 1',
                categoryId: 1,
                id: 1,
                price: 123,
                quantity: 5,
            },
        ];

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
                    {this.state.isCartDialogOpen && <CartDialog items={items}/>}
                </div>

            </div>
        );
    }

}
