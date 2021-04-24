import React, { ReactNode } from 'react';
import './NumberInput.css';

interface NumberInputProps {
    value?: number;
}

interface NumberInputState {
    value: number;
}

export class NumberInput extends React.Component<NumberInputProps, NumberInputState> {

    constructor(props: NumberInputProps) {
        super(props);
        this.state = {
            value: props.value || 1,
        }
    }

    public handleInput(event: React.ChangeEvent<HTMLInputElement>): void {

        const value = +event.target.value;

        this.setState({
            value: value || 1,
        });
    }

    public render(): ReactNode {
        return (
            <input className='number-input'
                   type={'number'}
                   value={this.state.value}
                   onChange={event => this.handleInput(event)}/>
        );
    };

}
