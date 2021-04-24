import React, { ReactNode } from 'react';
import './NumberInput.css';
// TODO Добавить проп maxValue
interface NumberInputProps {
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export class NumberInput extends React.Component<NumberInputProps> {

    constructor(props: NumberInputProps) {
        super(props);
    }

    public handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
        this.props.onChange(event);
    }

    public render(): ReactNode {
        return (
            <input className='number-input'
                   type={'number'}
                   value={this.props.value}
                   onChange={event => this.handleInput(event)}/>
        );
    };

}
