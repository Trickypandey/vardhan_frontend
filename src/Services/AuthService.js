import axios from 'axios';
import {  API_BASE_URL, API_ENDPOINTS } from '../Contants/ApiConstant'; // Import your API constants

 // Replace with your backend API URL

class AuthService {
  // Register a new user
  register(registrationData) {
    return axios.post(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, registrationData);
  }
  isLoggedIn() {
    const user = localStorage.getItem('user');
    return user !== null; // Returns true if the user data is found in localStorage
  }

  // Login a user and get a JWT token
  login(loginData) {
    return axios.post(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, loginData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // Logout the user
  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
