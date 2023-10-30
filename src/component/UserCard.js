import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Style/UserCard.css';

const UserCard = ({ user }) => {
  const { uid, username, email, role } = user;

  return (
    <div className="user-card">
      <Card className='card'>
        <CardContent className='cardContent'>
          <h3>User</h3>
          <p>ID: {uid}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Role: {role}</p>
          {/* Include other user details as needed */}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
