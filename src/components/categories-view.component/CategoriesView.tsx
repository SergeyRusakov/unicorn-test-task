import './CategoriesView.css';
import { CategoryCard } from '../category-card.component/CategoryCard';

export const CategoriesView = () => {

    const categories: string[] = [
        'Категория 1',
        'Категория 2',
        'Категория 3',
        'Категория 4',
        'Категория 5',
        'Категория 6',
        'Категория 7',
        'Категория 8',
        'Категория 9',
    ];

    const categoryCards = categories.map(category => {
        return (
            <div className='categories-view__card'>
                <CategoryCard name={category}/>
            </div>
        )
    });

    return (
        <div className='categories-view'>
            {categoryCards}
        </div>
    )
}
