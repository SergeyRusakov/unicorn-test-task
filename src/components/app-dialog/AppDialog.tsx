import React, { ReactNode } from 'react';
import './AppDialog.css';

interface AppDialogProps {
    isOpen: boolean;
    afterClose: () => void;
    children?: ReactNode;
}

export class AppDialog extends React.Component<AppDialogProps> {

    public handleOverlayClick(): void {
        this.props.afterClose();
    }

    public render(): ReactNode {
        return this.props.isOpen ? (
            <div className='app-dialog__overlay'
                 onClick={() => this.handleOverlayClick()}>
                <div className="app-dialog__content"
                     onClick={event => event.stopPropagation()}>
                    {this.props.children}
                </div>
            </div>
        ) : null;
    }

}
