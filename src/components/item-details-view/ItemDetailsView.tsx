import './ItemDetailsView.css';
import { NumberInput } from '../number-input/NumberInput';
import { SubmitButton } from '../submit-button/SubmitButton';

export const ItemDetailsView = () => {

    const itemId = 1;

    const handleNumberInput = () => {

    }

    const handleSubmitButton = () => {

    }

    return (
        <div className='item-details-view'>
            <div className="item-details-view__content">
                <div className="item-details-view__picture">
                </div>
                <div className="item-details-view__controls">
                    <NumberInput onChange={handleNumberInput}/>
                    <SubmitButton onClick={handleSubmitButton}>
                        Купить
                    </SubmitButton>
                </div>
            </div>
            <div className="item-details-view__title">
                Название товара
            </div>
            <div className="item-details-view__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi incidunt inventore itaque, nulla pariatur recusandae vitae!
                Aut consequuntur magnam natus nobis, porro quam quasi repudiandae voluptatem.
                Fugit labore quaerat suscipit?
            </div>
        </div>
    );

}
