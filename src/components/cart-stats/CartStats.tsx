import { useSelector } from 'react-redux';
import { selectCartStats } from '../../store/selected-items.slice';

export const CartStats = () => {

    const {sum, quantity} = useSelector(selectCartStats);

    return (
        <div className='cart-stats'>
            <span className='cart-stats__quantity'>{quantity} товаров </span>
            <span className='cart-stats__sum'>на сумму {sum} руб. </span>
        </div>
    )
}
