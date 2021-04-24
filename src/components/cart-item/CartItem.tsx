import React, { ReactNode } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import './CartItem.css';
import { NumberInput } from '../number-input/NumberInput';

export interface CartItemProps {
    item: SelectedItem;
}

// TODO вынести стейт в redux
export interface CartItemState {
    item: SelectedItem;
}

export class CartItem extends React.Component<CartItemProps, CartItemState> {

    constructor(props: CartItemProps) {
        super(props);
        this.state = {
            item: this.props.item,
        };
    }

    public handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState((state) => ({
            item: {
                ...state.item,
                quantity: +event.target.value || 1,
            },
        }))
    }

    public render(): ReactNode {
        return (
            <div className='cart-item'>
                <div className='cart-item__title'>
                    {this.props.item.title}
                </div>
                <div className='cart-item__quantity-form'>
                    <NumberInput value={this.state.item.quantity}
                                 onChange={(event) => this.handleInputChange(event)}/>
                </div>
                <div className='cart-item__remove-button'>
                    <img src='/clear.svg' alt="Clear"/>
                </div>
            </div>
        );
    }

}
