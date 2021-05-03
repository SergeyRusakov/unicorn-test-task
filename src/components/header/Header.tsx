import { HeaderCart } from '../header-cart/HeaderCart';
import './Header.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configuration/routes.config';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';

export const Header = () => {
    return (
        <div className='header'>
            <div className="header__navigation">
                <Link to={`/${ROUTES.categories}`}>
                    <h1 className='header__title'>
                        UNICORN SHOP
                    </h1>
                </Link>
                <Breadcrumbs/>
            </div>
            <HeaderCart/>
        </div>
    )
}
