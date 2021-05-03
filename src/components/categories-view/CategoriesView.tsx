import './CategoriesView.css';
import { CategoryCard } from '../category-card/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories.slice';

export const CategoriesView = () => {

    const categories = useSelector((state: RootState) => state.categories.categories);
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.categories.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    const categoryCards = categories.map(category => {
        return (

            <div className='categories-view__card'
                 key={category.id}>
                <Link to={`/items/${category.id}`}>
                    <CategoryCard name={category.title}/>
                </Link>
            </div>
        );
    });

    return (
        <div className='categories-view'>
            {categoryCards}
        </div>
    );
};
