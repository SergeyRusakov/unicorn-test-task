import './PaymentSuccessItem.css';
import { SelectedItem } from '../../types/selected-item.type';

interface PaymentSuccessItemProps {
    item: SelectedItem;
}

export const PaymentSuccessItem = (props: PaymentSuccessItemProps) => {

    const {item} = props;

    return (
        <div className='payment-success-item'>
            <div className="payment-success-item__title">
                {`${item.title} (${item.quantity} шт.)`}
            </div>
            <div className="payment-success-item__sum">
                {`${item.price * item.quantity}`}
            </div>
        </div>
    );

}
