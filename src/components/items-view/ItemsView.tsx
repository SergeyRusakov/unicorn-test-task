import './ItemsView.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectByCategoryId } from '../../store/shopping-items.slice';
import { CategoryCard } from '../category-card/CategoryCard';
import { itemAdded } from '../../store/selected-items.slice';
import { ShoppingItem } from '../../types/shopping-item.type';
// TODO Избавиться от дублирования с CategoriesView
export const ItemsView = () => {

    // TODO Вынести в роутинг
    const itemId = 1;

    const items = useSelector(selectByCategoryId(itemId));
    const dispatch = useDispatch();

    const handleItemClick = (item: ShoppingItem) => {
        dispatch(itemAdded(item, 1));
    }

    // TODO Убрать хендлер
    const itemCards = items.map(item => {
        return (
            <div className='items-view__item-card'
                 onClick={() => handleItemClick(item)}
                 key={item.id}>
                <CategoryCard name={item.title}/>
            </div>
        );
    });

    return (
      <div className='items-view'>
          {itemCards}
      </div>
    );
};
