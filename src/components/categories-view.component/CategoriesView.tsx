import './CategoriesView.css';
import { CategoryCard } from '../category-card.component/CategoryCard';
import { Category } from '../../types/category.type';

export const CategoriesView = () => {

    const categories: Category[] = [
        {
            id: 1,
            title: 'Категория 1',
        },
        {
            id: 2,
            title: 'Категория 2',
        },
        {
            id: 3,
            title: 'Категория 3',
        },
        {
            id: 4,
            title: 'Категория 4',
        },
        {
            id: 5,
            title: 'Категория 5',
        },
        {
            id: 6,
            title: 'Категория 6',
        },
        {
            id: 7,
            title: 'Категория 7',
        },
        {
            id: 8,
            title: 'Категория 8',
        },
    ];

    // TODO Добавить key
    const categoryCards = categories.map(category => {
        return (
            <div className='categories-view__card' key={category.id}>
                <CategoryCard name={category.title}/>
            </div>
        )
    });

    return (
        <div className='categories-view'>
            {categoryCards}
        </div>
    )
}
