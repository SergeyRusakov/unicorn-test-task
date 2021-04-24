import './HeaderCart.css';

export const HeaderCart = () => {
    return (
        <div className='header-cart'>

            <div className='header-cart__title'>
                Корзина
            </div>

            <div className='header-cart__info'>
                <span className='header-cart__info-sum'>Общая сумма</span>
                <span className='header-cart__info-count'>Общее кол-во</span>
            </div>

        </div>
    );
}