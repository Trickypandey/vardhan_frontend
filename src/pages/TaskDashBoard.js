import React, { useState, useEffect } from 'react';
import Base from "../component/Base";
import TicketService from "../Services/TicketService";
import UserCard from '../component/UserCard';
const TaskDashBoard = () => {
  const [tickets, settickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const allUsers = (await TicketService.getAllTickets).data;
      settickets(allUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };   
    return (
      <Base>
          <div>
        <h1>User Dashboard</h1>
        <ul>
          {tickets.map((ticket) => (
            <UserCard key={ticket.uid} />
          ))}
        </ul>
      </div>
      </Base>
    );
};
export default TaskDashBoard;