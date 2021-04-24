import { HeaderCart } from '../header-cart.component/HeaderCart';
import './Header.css';

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>
                ВИД 1
            </h1>
            <HeaderCart/>
        </div>
    )
}
