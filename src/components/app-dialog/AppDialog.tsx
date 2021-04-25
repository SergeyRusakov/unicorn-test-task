import React, { ReactNode } from 'react';
import './AppDialog.css';

interface AppDialogProps<T> {
    isOpen: boolean;
    afterClose: (returnValue?: T) => void;
    children?: ReactNode;
}

// TODO Возможно стоит убрать дженерик
export class AppDialog<T> extends React.Component<AppDialogProps<T>> {

    // TODO Убрать всплытие ивента
    public handleOverlayClick(): void {
        this.props.afterClose();
    }

    public render(): ReactNode {
        return this.props.isOpen ? (
            <div className='app-dialog__overlay'
                 onClick={() => this.handleOverlayClick()}>
                <div className="app-dialog__content">
                    {this.props.children}
                </div>
            </div>
        ) : null;
    }

}
