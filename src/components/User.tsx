import React, { FC } from 'react';

interface Props {
    name: string,
    age: number,
    addUser:()=>void
};

const User: FC<Props> = ({name,age,addUser}) => {
    
    return (
        <div>
            <h2>Hello from {name} wtih experiences witth {age} years</h2>
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default User;