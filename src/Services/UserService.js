import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../Contants/ApiConstant';

const UserService = {
  createNewUser: async (userData) => {
    try {
      const response = axios.post(`${API_BASE_URL}${API_ENDPOINTS.CREATE_NEW_USER}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
  getAllUsers: async () => {
    // try {
    //   const response = axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_USERS}`);
    //   return response; // Assuming response.data is an array of users
    // } catch (error) {
    //   console.error('Error fetching users:', error);
    //   throw error;
    // }
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_USER}`);
  }
};

export default UserService;
