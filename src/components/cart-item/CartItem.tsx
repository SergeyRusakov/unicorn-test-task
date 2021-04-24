import React, { ReactNode } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import './CartItem.css';

export interface CartItemProps {
    item: SelectedItem;
}

export class CartItem extends React.Component<CartItemProps> {

    constructor(props: CartItemProps) {
        super(props);
    }

    public render(): ReactNode {
        return (
            <div className='cart-item'>
                <div className='cart-item__title'>
                    {this.props.item.title}
                </div>
                <div className='cart-item__quantity-form'>
                    1231231
                </div>
                <div className='cart-item__remove-button'>
                    <img src='/clear.svg' alt="Clear"/>
                </div>
            </div>
        );
    }

}
