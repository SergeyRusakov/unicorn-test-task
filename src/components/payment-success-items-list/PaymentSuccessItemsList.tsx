import './PaymentSuccessItemsList.css';
import { SelectedItem } from '../../types/selected-item.type';
import { PaymentSuccessItem } from '../payment-success-item/PaymentSuccessItem';

interface PaymentSuccessItemsListProps {
    items: SelectedItem[];
}

export const PaymentSuccessItemsList = (props: PaymentSuccessItemsListProps) => {

    const {items} = props;

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
