import React from 'react';

//TODO роверить возможность прокидвания колбэка на клик через пропсы
export interface SubmitButtonProps {
    title: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {

    const {title} = props;

    return (
        <button className='submit-button'>
            {title}
        </button>
    )
}
