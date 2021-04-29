import React, { useState } from 'react';
import { SelectedItem } from '../../types/selected-item.type';
import './CartItem.css';
import { NumberInput } from '../number-input/NumberInput';
import { useDispatch } from 'react-redux';
import { itemRemoved } from '../../store/selected-items.slice';

// TODO Переделать на функциональный компонент
export interface CartItemProps {
    item: SelectedItem;
}

// TODO вынести стейт в redux
export interface CartItemState {
    item: SelectedItem;
}

export const CartItem = (props: CartItemProps) => {

    const {item} = props;
    const [count] = useState(item.quantity);
    const dispatch = useDispatch();

    // TODO Пример как надо:

    // const { postId } = match.params
    // const post = useSelector(state =>
    //     state.posts.find(post => post.id === postId)
    // )
    //
    // const [title, setTitle] = useState(post.title)
    // const [content, setContent] = useState(post.content)
    //
    // const dispatch = useDispatch()
    // const history = useHistory()
    //
    // const onTitleChanged = e => setTitle(e.target.value)
    // const onContentChanged = e => setContent(e.target.value)
    //
    // const onSavePostClicked = () => {
    //     if (title && content) {
    //         dispatch(postUpdated({ id: postId, title, content }))
    //         history.push(`/posts/${postId}`)
    //     }
    // }

    // TODO Починить инпут
    const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changedValue = +event.target.value;
        // if (!Number.isNaN(changedValue) && changedValue > 1 && changedValue <= item.available) {
        //     dispatch(itemAdded({
        //         ...props.item,
        //         quantity: count
        //     }));
        // }
    }

    const handleRemoveButton = () => {
        dispatch(itemRemoved(item));
    }

    return (
        <div className='cart-item'>
            <div className='cart-item__title'>
                {item.title}
            </div>
            <div className='cart-item__quantity-form'>
                <NumberInput value={item.quantity}
                             onChange={(event) => handleNumberInput(event)}/>
            </div>
            <div className='cart-item__remove-button' onClick={handleRemoveButton}>
                <img src='/clear.svg' alt="Clear"/>
            </div>
        </div>
    );

}
