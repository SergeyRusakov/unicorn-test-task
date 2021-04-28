import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
    percentage: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div className='progress-bar'>
            <div className='progress-bar__bar'
                 style={{ width: `${props.percentage}%` }}>
            </div>
        </div>
    );
}
