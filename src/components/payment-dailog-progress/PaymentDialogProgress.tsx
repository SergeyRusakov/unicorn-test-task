import React, { ReactNode } from 'react';
import { ProgressBar } from '../progress-bar/ProgressBar';
import './PaymentDialogProgress.css';

interface PaymentDialogProgressState {
    loadingPercentage: number;
}

export class PaymentDialogProgress extends React.Component<any, PaymentDialogProgressState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loadingPercentage: 0,
        };
    }
    // Used RefObject only for experience purposes (Использовал рефы исключительно в ознакомительных целях)
    public setPercentage(percentage: number): void {
        this.setState({
            loadingPercentage: percentage,
        });
    }

    public render(): ReactNode {
        return (
            <div className='payment-dialog-progress'>
                <div className="payment-dialog-progress__head">
                    <div className="payment-dialog-progress__title">
                        Осуществление оплаты
                    </div>
                    <div className="payment-dialog-progress__percentage">
                        {this.state.loadingPercentage + '%'}
                    </div>
                </div>
                <div className="payment-dialog-progress__bar">
                    <ProgressBar percentage={this.state.loadingPercentage}/>
                </div>
            </div>
        );
    }

}
