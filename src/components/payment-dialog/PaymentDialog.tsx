import React, { ReactNode, RefObject } from 'react';
import './PaymentDialog.css';
import { PaymentDialogProgress } from '../payment-dailog-progress/PaymentDialogProgress';

interface PaymentDialogState {
    isLoading: boolean;
    loadingPercentage: number;
}

export class PaymentDialog extends React.Component<any, PaymentDialogState> {

    private loadingInterval: any;
    // Used RefObject only for experience purposes (Использовал рефы исключительно в ознакомительных целях)
    private readonly progressComponentRef: RefObject<PaymentDialogProgress>;

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            loadingPercentage: 0,
        }
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
                this.progressComponentRef.current?.setPercentage(percentage);
                return {
                    loadingPercentage: percentage,
                    isLoading: percentage < 100,
                };
            });
        }, 20);
    }

    private clearLoadingInterval(): void {
        clearInterval(this.loadingInterval);
    }

    public render(): ReactNode {

        const content = this.state.isLoading ?
            <PaymentDialogProgress ref={this.progressComponentRef}/> :
            null;

        return (
            <div className='payment-dialog'>

                <div className="payment-dialog__content">
                    {content}
                </div>

            </div>
        );
    }

}
