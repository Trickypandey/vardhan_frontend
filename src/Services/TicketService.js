import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../Contants/ApiConstant';

// Get the bearer token from your authentication mechanism (e.g., localStorage or cookies)
const getBearerToken = () => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3VyYWJoIiwiZXhwIjoxNjk4MDg3OTg0LCJpYXQiOjE2OTgwNTE5ODR9.4pZ3BUH5tppjP21Ta28pv_SMlo0Mo7dkPSkWK1lDFq0Cs_FrWiMG-qqPJgv6KPWIPnU8IlFlMxPY0sskFiFlOg'; // Replace with your actual token
  return token ? `Bearer ${token}` : '';
};
const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3VyYWJoIiwiZXhwIjoxNjk4MDg3OTg0LCJpYXQiOjE2OTgwNTE5ODR9.4pZ3BUH5tppjP21Ta28pv_SMlo0Mo7dkPSkWK1lDFq0Cs_FrWiMG-qqPJgv6KPWIPnU8IlFlMxPY0sskFiFlOg';


const TicketService = {
  createTicket: (ticketDto) => {
    return axios.post(`${API_BASE_URL}${API_ENDPOINTS.CREATE_TICKET}`, ticketDto, {
      withCredentials: true, // Set withCredentials to true
      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  getAllTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_TICKETS}`, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  getTicketById: (ticketId) => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_TICKET_BY_ID(ticketId)}`, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  updateTicket: (ticketId, ticketDto) => {
    return axios.put(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET(ticketId)}`, ticketDto, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  deleteTicket: (ticketId) => {
    return axios.delete(`${API_BASE_URL}${API_ENDPOINTS.DELETE_TICKET(ticketId)}`, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  updateTicketStatus: (ticketId, newStatus) => {
    return axios.patch(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET_STATUS(ticketId)}`, null, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      },
      params: { newStatus },
    });
  },

  updateTicketAssignedTo: (ticketId, newAssignedTo) => {
    return axios.patch(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET_ASSIGNED_TO(ticketId)}`, null, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      },
      params: { newAssignedTo },
    });
  },

  getNewTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_NEW_TICKETS}`, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': getBearerToken()
      }
    });
  },

  getPendingTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_PENDING_TICKETS}`, {
      withCredentials: true, // Set withCredentials to true
      headers: {
        'Authorization': token
      }
    });
  },

  getCompletedTickets: () => {
    console.log(getBearerToken());
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_COMPLETED_TICKETS}`, {
      withCredentials: true, // Set withCredentials to true

      headers: {
        'Authorization': token
      }
    });
  },
};

export default TicketService;
