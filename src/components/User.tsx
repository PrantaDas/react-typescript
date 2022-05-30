import React, { FC } from 'react';
import UserModel from '../types/model';

// interface Props {
//     name: string,
//     age: number,
//     addUser:()=>void
// };

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {

    return (
        <div>
            <h2>Hello from {user.name} wtih email {user.email}</h2>
            <button onClick={() => addUser(user)}>Add User</button>
        </div>
    );
};

export default User;