import React, { useEffect, useState } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import './CartItem.css';
import { NumberInput } from '../number-input/NumberInput';
import { useDispatch } from 'react-redux';
import { itemQuantityChanged, itemRemoved } from '../../store/selected-items.slice';

// TODO Переделать на функциональный компонент
export interface CartItemProps {
    item: SelectedItem;
}

export const CartItem = (props: CartItemProps) => {

    const { item } = props;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        if (value > 0 && value <= item.available) {
            dispatch(itemQuantityChanged({ id: item.id, quantity: value }));
        } else if (value === 0){
            dispatch(itemRemoved(item));
        } else {
            setQuantity(item.available);
            dispatch(itemQuantityChanged({ id: item.id, quantity: item.available }));
        }
    }

    const handleQuantityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        if (value >= 0) {
            setQuantity(+event.target.value);
        }
    }
    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity]);

    const handleRemoveButton = () => {
        dispatch(itemRemoved(item));
    }

    return (
        <div className='cart-item'>
            <div className='cart-item__title'>
                {item.title}
            </div>
            <div className='cart-item__quantity-form'>
                <NumberInput value={quantity}
                             onChange={handleQuantityInputChange}
                             onBlur={handleQuantityInputBlur}/>
            </div>
            <div className='cart-item__remove-button' onClick={handleRemoveButton}>
                <img src='/clear.svg' alt="Clear"/>
            </div>
        </div>
    );

}
