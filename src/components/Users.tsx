import React, { useEffect, useState } from 'react';
import UserModel from '../types/model';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    const [team, setTeam] = useState<UserModel[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
    }, [])

    const handleAddUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    };
    return (
        <div>
            <h1>My Users</h1>
            <h2>Team Size:{team.length}</h2>
            {/* <User name="Kesmat" age={69} addUser={handleAddUser}></User> */}
            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;