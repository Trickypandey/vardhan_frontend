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
};