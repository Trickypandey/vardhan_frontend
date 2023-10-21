import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../Contants/ApiConstant';

const TicketService = {
  createTicket: (ticketDto) => {
    return axios.post(`${API_BASE_URL}${API_ENDPOINTS.CREATE_TICKET}`, ticketDto);
  },

  getAllTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_TICKETS}`);
  },

  getTicketById: (ticketId) => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_TICKET_BY_ID(ticketId)}`);
  },

  updateTicket: (ticketId, ticketDto) => {
    return axios.put(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET(ticketId)}`, ticketDto);
  },

  deleteTicket: (ticketId) => {
    return axios.delete(`${API_BASE_URL}${API_ENDPOINTS.DELETE_TICKET(ticketId)}`);
  },

  updateTicketStatus: (ticketId, newStatus) => {
    return axios.patch(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET_STATUS(ticketId)}`, null, {
      params: { newStatus },
    });
  },

  updateTicketAssignedTo: (ticketId, newAssignedTo) => {
    return axios.patch(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_TICKET_ASSIGNED_TO(ticketId)}`, null, {
      params: { newAssignedTo },
    });
  },

  getNewTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_NEW_TICKETS}`);
  },

  getPendingTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_PENDING_TICKETS}`);
  },

  getCompletedTickets: () => {
    return axios.get(`${API_BASE_URL}${API_ENDPOINTS.GET_COMPLETED_TICKETS}`);
  },
};

export default TicketService;
