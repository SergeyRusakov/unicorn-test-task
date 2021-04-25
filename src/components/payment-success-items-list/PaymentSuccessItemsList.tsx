import './PaymentSuccessItemsList.css';
import { SelectedItem } from '../../types/selected-item.type';
import { PaymentSuccessItem } from '../payment-success-item/PaymentSuccessItem';

export const PaymentSuccessItemsList = () => {
    // TODO Убрать моки
    const items: SelectedItem[] = [
        {
            title: 'Товар 1',
            categoryId: 1,
            id: 1,
            price: 123,
            quantity: 5,
        },
        {
            title: 'Товар 1',
            categoryId: 1,
            id: 2,
            price: 123,
            quantity: 5,
        },
        {
            title: 'Товар 1',
            categoryId: 1,
            id: 3,
            price: 123,
            quantity: 5,
        },
    ];

    // TODO Переименовать
    const renderItems = items.map(item => (
        <li className='payment-success-items-list__item'>
            <PaymentSuccessItem item={item}/>
        </li>
    ));

    return (
        <div className='payment-success-items-list'>
            <ul className='payment-success-items-list__list'>
                {renderItems}
            </ul>
            <div>Оплата прошла успешно!</div>
        </div>
    );
};
