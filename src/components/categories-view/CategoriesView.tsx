import './CategoriesView.css';
import { CategoryCard } from '../category-card/CategoryCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const CategoriesView = () => {

    const categories = useSelector((state: RootState) => state.categories);

    const categoryCards = categories.map(category => {
        return (
            <div className='categories-view__card' key={category.id}>
                <CategoryCard name={category.title}/>
            </div>
        );
    });

    return (
        <div className='categories-view'>
            {categoryCards}
        </div>
    );
};
