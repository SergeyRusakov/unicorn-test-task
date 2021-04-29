import React from 'react';
import './NumberInput.css';

interface NumberInputProps {
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export const NumberInput = (props: NumberInputProps) => {

    const {value, onChange, onBlur} = props;

    return (
        <input className='number-input'
               type={'number'}
               value={value}
               onChange={event => onChange ? onChange(event) : undefined}
               onBlur={event => onBlur ? onBlur(event) : undefined}/>
    );
}
