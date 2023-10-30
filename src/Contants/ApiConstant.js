// apiConstants.js

export const API_BASE_URL = 'http://localhost:9090';

export const API_ENDPOINTS = {
  CREATE_TICKET: '/api/tickets/create',
  GET_ALL_TICKETS: '/api/tickets/getall',
  GET_TICKET_BY_ID: (ticketId) => `/api/tickets/${ticketId}`,
  UPDATE_TICKET: (ticketId) => `/api/tickets/${ticketId}`,
  DELETE_TICKET: (ticketId) => `/api/tickets/${ticketId}`,
  UPDATE_TICKET_STATUS: (ticketId) => `/api/tickets/${ticketId}/status`,
  UPDATE_TICKET_ASSIGNED_TO: (ticketId) => `/api/tickets/${ticketId}/assign`,
  GET_NEW_TICKETS: '/api/tickets/new',
  GET_PENDING_TICKETS: '/api/tickets/pending',
  GET_COMPLETED_TICKETS: '/api/tickets/completed',
  
  // Customer Endpoints
  ADD_CUSTOMER: '/api/customers/add',
  GET_ALL_CUSTOMERS: '/api/customers/getall',
  GET_ADDRESS_BY_ID: (addressId) => `/api/customers/getAddress/${addressId}`,


  // Auth Endpoints
  LOGIN:'/auth/login',
  REGISTER:'/auth/register',

  // user
  CREATE_NEW_USER :'/api/users/create_user',
  GET_ALL_USER :'/api/users/alluser'
};
