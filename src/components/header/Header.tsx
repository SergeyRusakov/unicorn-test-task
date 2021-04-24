import { HeaderCart } from '../header-cart/HeaderCart';
import './Header.css';

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>
                UNICORN SHOP
            </h1>
            <HeaderCart/>
        </div>
    )
}
