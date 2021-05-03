import './CirclesLoadingIndicator.css';
import { useEffect, useState } from 'react';

export const CirclesLoadingIndicator = () => {

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setRotation(rotation + 5);
        }, 10);
    });

    return (
        <div className='circles-loading-indicator'>
            <img className='circles-loading-indicator__spinner'
                 style={{transform: `rotate(${rotation}deg)`}}
                 alt='spinner'
                 src={'/spinner.svg'}/>
        </div>
    );
}
