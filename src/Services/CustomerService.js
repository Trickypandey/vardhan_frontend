// CustomerService.js

import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../Contants/ApiConstant';

const CustomerService = {
  // Fetch all customers
  getAllCustomers: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_CUSTOMERS}`);
  },

  // Add a new customer
  addCustomer: (customerData) => {
    return axios.post(`${API_BASE_URL}${API_ENDPOINTS.ADD_CUSTOMER}`, customerData);
  },

  // Get an address by addressId
  getAddressByAddressId: (addressId) => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ADDRESS_BY_ID(addressId)}`);
  },
};

export default CustomerService;
