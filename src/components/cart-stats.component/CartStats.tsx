import { CartStatsValue } from '../../types/cart-stats-value.type';

export const CartStats = () => {
    // TODO убрать мок
    const cartStats: CartStatsValue = {
        quantity: 120,
        sum: 12312312,
    }

    const {sum, quantity} = cartStats;

    return (
        <div className='cart-stats'>
            <span className='cart-stats__sum'>{sum}</span>
            <span className='cart-stats__quantity'>{quantity}</span>
        </div>
    )
}
