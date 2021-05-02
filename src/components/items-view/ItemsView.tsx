import './ItemsView.css';
import { useSelector } from 'react-redux';
import { selectByCategoryId } from '../../store/shopping-items.slice';
import { CategoryCard } from '../category-card/CategoryCard';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configuration/routes.config';

export const ItemsView = () => {

    const { categoryId } = useParams<{categoryId: string}>();

    const items = useSelector(selectByCategoryId(+categoryId));

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
          {itemCards}
      </div>
    );
};
