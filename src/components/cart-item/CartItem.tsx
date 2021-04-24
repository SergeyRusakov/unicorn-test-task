import React, { ReactNode } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import './CartItem.css';
import { NumberInput } from '../number-input/NumberInput';

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
                    <NumberInput/>
                </div>
                <div className='cart-item__remove-button'>
                    <img src='/clear.svg' alt="Clear"/>
                </div>
            </div>
        );
    }

}
