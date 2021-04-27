import './ItemsView.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectByCategoryId } from '../../store/shopping-items.slice';
import { CategoryCard } from '../category-card/CategoryCard';
import { setItem } from '../../store/selected-items.slice';
// TODO Избавиться от дублирования с CategoriesView
export const ItemsView = () => {

    // TODO Вынести в роутинг
    const itemId = 1;

    const items = useSelector(selectByCategoryId(1));
    const dispatch = useDispatch();
    // TODO Убрать хендлер
    const itemCards = items.map(item => {
        return (
            <div className='items-view__item-card'
                 onClick={() => dispatch(setItem({...item, quantity: 1}))}
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
