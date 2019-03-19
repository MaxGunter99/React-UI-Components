import React from 'react';
import './Button.css';

//NUMBERS 1-9
function Number(props) {
    return (
        <div className='numberButtons'>
            <button><h1 className='clear'>clear</h1></button>
            <button><h1 className='function'>÷</h1></button>
            <button><h1>7</h1></button>
            <button><h1>8</h1></button>
            <button><h1>9</h1></button>
            <button><h1 className='function'>×</h1></button>
            <button><h1>4</h1></button>
            <button><h1>5</h1></button>
            <button><h1>6</h1></button>
            <button><h1 className='function'>−</h1></button>
            <button><h1>1</h1></button>
            <button><h1>2</h1></button>
            <button><h1>3</h1></button>
            <button><h1 className='function'>+</h1></button>
        </div>
    );
}

export default Number;
