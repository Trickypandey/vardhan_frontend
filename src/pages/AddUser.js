import React, { useState } from 'react';
import UserService from '../Services/UserService';
import Base from '../component/Base';

const AddUserForm = () => {
  const initialUser = {
    username: '',
    name: '',
    password: '',
    role: '',
    number: '',
    user_image: 'example.jpg', // Constant image value
    email: ''
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.createNewUser(user);
      console.log('User created:', response);
      setUser(initialUser); // Reset the form after successful creation
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Base>
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
        <input type="text" name="number" value={user.number} onChange={handleChange} placeholder="Number" />
        {/* <input type="file" name="user_image" onChange={handleChange} /> */}
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        
        <label>
            Role:
            <select name="role" value={user.role} onChange={handleChange}>
              {/* Include an option for 'user' role if needed */}
              <option value="ENG">ENG</option>
              <option value="ADMIN">ADMIN</option>
            </select>
        </label>
        
        <button type="submit">Add User</button>
        </form>
    </Base>

  );
};

export default AddUserForm;
