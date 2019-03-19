import React from 'react';
import './Button.css';

//CLEAR AND 0

function ActionButtons(props) {
    return (
        <div className='numberButtons'>
            <button><h1 className='zero'>0</h1></button>
            <button><h1 className='function'>=</h1></button>
        </div>
    );
}

export default ActionButtons;