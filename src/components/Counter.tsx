import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {
    interface User {
        name: string,
        job: string
    }

    const [counter, setCounter] = useState<number>(0);

    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (): void => {
        setCounter(counter + 1);
    };

    const handleDecrease = (): void => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const userData = {
            name: "Adam",
            job: 'jobless'
        };
        setUser(userData)
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
    }
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