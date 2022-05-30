import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser=():void=>{
        
    };
    return (
        <div>
            <h1>My Users</h1>
            <User name="Kesmat" age={69} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;