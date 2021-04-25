import React, { ReactNode } from 'react';

export interface SubmitButtonProps {
    onClick?: (event: React.BaseSyntheticEvent) => void;
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
                onClick={event => handleClick(event)}>
            {props.children}
        </button>
    )
}
