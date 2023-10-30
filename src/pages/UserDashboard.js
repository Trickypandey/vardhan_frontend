import React, { useState, useEffect } from 'react';
import UserService from '../Services/UserService';
import Base from '../component/Base';
import UserCard from '../component/UserCard';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const allUsers = (await UserService.getAllUsers()).data;
      setUsers(allUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Base>
      <div>
        <h1>User Dashboard</h1>
        <ul>
          {users.map((user) => (
            <UserCard key={user.uid} user={user} />
          ))}
        </ul>
      </div>
    </Base>
  );
};

export default UserDashboard;
