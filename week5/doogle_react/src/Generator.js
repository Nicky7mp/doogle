import React from 'react';
import Dog1 from './Dog1';

const Generator = () => {
    return (
        <div>
            <div>Choose dog one:</div>
            <div>
                <Dog1 breed="Labrador" />
                <Dog1 breed="Poodle" />
                <Dog1 breed="Corgi" />
            </div>
        </div>
    )
}

export default Generator;