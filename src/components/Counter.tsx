import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrease = (): void => {
        setCounter(counter + 1);
    };
    
    const handleDecrease = (): void => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    };
    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;