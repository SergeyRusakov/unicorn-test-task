import React, { ReactNode } from 'react';

export interface SubmitButtonProps {
    onClick?: (event: React.BaseSyntheticEvent) => void;
    disabled?: boolean;
    children: ReactNode;
}

export const SubmitButton = (props: SubmitButtonProps) => {

    const handleClick = (event: React.BaseSyntheticEvent) => {
        if (props.onClick) {
            props.onClick(event);
        }
    }

    return (
        <button className='submit-button'
                disabled={props.disabled}
                onClick={event => handleClick(event)}>
            {props.children}
        </button>
    )
}
