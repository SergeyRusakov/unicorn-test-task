import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { selectAllShoppingItems } from '../../store/shopping-items.slice';
import { selectAllCategories } from '../../store/categories.slice';
import { ReactNode } from 'react';
import { ROUTES } from '../../configuration/routes.config';
import './Breadcrumbs.css';
import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {

    const route = useLocation();
    const shoppingItems = useSelector(selectAllShoppingItems);
    const categories = useSelector(selectAllCategories);

    const crumbs: ReactNode[] = [];

    const generateCrumb = (link: string, title: string) => {
        return (
            <Link to={link} key={link}>
                <div className='breadcrumbs__item'>
                    /{title}
                </div>
            </Link>
        );
    };

    const paths = route.pathname.split('/');

    if (paths.includes(ROUTES.items)) {
        const index = paths.indexOf(ROUTES.items);
        const categoryId = paths[index + 1];
        const category = categories.find(category => category.id === +categoryId);
        if (category) {
            crumbs.push(generateCrumb(`/${ROUTES.items}/${category.id}`, category.title));
        }
    }

    if (paths.includes(ROUTES.itemOrder)) {
        const index = paths.indexOf(ROUTES.itemOrder);
        const itemId = paths[index + 1];
        const item = shoppingItems.find(item => item.id === +itemId);
        if (item) {
            const category = categories.find(category => category.id === item.categoryId);
            if (category) {
                crumbs.push(generateCrumb(`/${ROUTES.items}/${category.id}`, category.title));
                crumbs.push(generateCrumb(`/${ROUTES.itemOrder}/${itemId}`, item.title));
            }

        }
    }

    return (
        <div className='breadcrumbs'>{crumbs}</div>
    );

}