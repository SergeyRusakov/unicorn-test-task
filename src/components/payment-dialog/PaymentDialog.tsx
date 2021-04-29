import React, { ReactNode, RefObject } from 'react';
import './PaymentDialog.css';
import { PaymentDialogProgress } from '../payment-dailog-progress/PaymentDialogProgress';
import { PaymentSuccessItemsList } from '../payment-success-items-list/PaymentSuccessItemsList';
import { SelectedItem } from '../../types/selected-item.type';

interface PaymentDialogProps {
    selectedItems: SelectedItem[];
}

interface PaymentDialogState {
    isLoading: boolean;
    loadingPercentage: number;
}

// TODO Добавить удаление товаров из корзины после загрузки
export class PaymentDialog extends React.Component<PaymentDialogProps, PaymentDialogState> {

    // Used RefObject only for experience purposes(Использовал рефы исключительно в ознакомительных целях
    private readonly progressComponentRef: RefObject<PaymentDialogProgress>;
    private readonly selectedItems: SelectedItem[];
    private loadingInterval: any;

    constructor(props: PaymentDialogProps) {
        super(props);
        this.state = {
            isLoading: true,
            loadingPercentage: 0,
        }
        this.selectedItems = props.selectedItems;
        this.progressComponentRef = React.createRef<PaymentDialogProgress>();
    }

    public componentDidMount(): void {
        this.setLoadingInterval();
    }

    public componentWillUnmount(): void {
        this.clearLoadingInterval();
    }

    private setLoadingInterval(): void {
        this.loadingInterval = setInterval(() => {
            this.setState((state) => {
                const percentage = state.loadingPercentage + 1;
                const isLoading = percentage <= 100;
                this.progressComponentRef.current?.setPercentage(percentage);
                if (!isLoading) {
                    this.afterLoading();
                }
                return {
                    loadingPercentage: percentage,
                    isLoading,
                };
            });
        }, 20);
    }

    private afterLoading(): void {
        this.clearLoadingInterval();
    }

    private clearLoadingInterval(): void {
        clearInterval(this.loadingInterval);
    }

    public render(): ReactNode {

        const content = this.state.isLoading ?
            <PaymentDialogProgress ref={this.progressComponentRef}/> :
            <PaymentSuccessItemsList items={this.selectedItems}/>

        return (
            <div className='payment-dialog'>

                <div className="payment-dialog__content">
                    {content}
                </div>

            </div>
        );
    }

}
