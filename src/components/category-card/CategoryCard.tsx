import './CategoryCard.css';

interface CategoryCardProps {
    name: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
    return (
        <div className='category-card'>
            {props.name}
        </div>
    )
}
