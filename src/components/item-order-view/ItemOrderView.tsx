import './ItemOrderView.css';
import { NumberInput } from '../number-input/NumberInput';
import { SubmitButton } from '../submit-button/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingItemById } from '../../store/shopping-items.slice';
import { RootState } from '../../store/store';
import React, { useState } from 'react';
import { itemAdded } from '../../store/selected-items.slice';
import { useParams } from 'react-router';

export const ItemOrderView = () => {

    const {itemId} = useParams<{itemId}>();
    const item = useSelector((state: RootState) => selectShoppingItemById(state, +itemId));
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        if (value >= 0) {
            setQuantity(+event.target.value);
        }
    }

    const handleQuantityInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        if (item && value > item.available) {
            setQuantity(item?.available);
        } else if (value <= 0) {
            setQuantity(1);
        }
    }

    const handleSubmitClick = () => {
        if (item) {
            dispatch(itemAdded(item, quantity))
        }
    }

    return (
        <div className='item-order-view'>
            <div className='item-order-view__content'>
                <div className="item-order-view__content-top">
                    <div className="item-order-view__image">
                    </div>
                    <div className="item-order-view__controls">
                        <div className="item-order-view__controls-input">
                            <NumberInput onBlur={handleQuantityInputBlur}
                                         value={quantity}
                                         onChange={handleQuantityInputChange}/>
                        </div>

                        <div className="item-order-view__controls-submit">
                            <SubmitButton onClick={handleSubmitClick}>Купить</SubmitButton>
                        </div>

                    </div>
                </div>
                <div className="item-order-view__content-bottom">
                    <h3 className="item-order-view__title">
                        {item?.title}
                    </h3>
                    <div className="item-order-view__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere inventore molestias
                        neque non perferendis, sit. Culpa cumque enim labore nobis officiis, saepe vero. Iure nulla quos
                        ratione ullam veniam.
                    </div>
                </div>
            </div>
        </div>
    );
}