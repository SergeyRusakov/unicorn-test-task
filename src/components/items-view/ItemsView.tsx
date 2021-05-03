import './ItemsView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoppingItemsByCategoryId, selectAllShoppingItems } from '../../store/shopping-items.slice';
import { CategoryCard } from '../category-card/CategoryCard';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configuration/routes.config';
import { useEffect } from 'react';
import { CirclesLoadingIndicator } from '../circles-loading-indicator/CirclesLoadingIndicator';
import { RootState } from '../../store/store';

export const ItemsView = () => {

    const {categoryId} = useParams<{ categoryId: string }>();
    const dispatch = useDispatch();
    const items = useSelector(selectAllShoppingItems);
    const status = useSelector((state: RootState) => state.shoppingItems.status);

    useEffect(() => {
        dispatch(fetchShoppingItemsByCategoryId(+categoryId));
    }, []);

    const loadingIndicator = (
        <div className="items-view__loading-indicator">
            {(status !== 'loading' || <CirclesLoadingIndicator/>)}
        </div>
    );

    const itemCards = items.map(item => {
        return (
            <Link to={`/${ROUTES.itemOrder}/${item.id}`}
                  key={item.id}>
                <div className='items-view__item-card'>
                    <CategoryCard name={item.title}/>
                </div>
            </Link>
        );
    });

    return (
        <div className='items-view'>
            {status === 'loading' ? loadingIndicator : itemCards}
        </div>
    );
};
