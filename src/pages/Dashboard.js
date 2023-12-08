import Base from '../component/Base';
import TicketService from '../Services/TicketService';
import CustomerService from '../Services/CustomerService';
import React, { useEffect, useState } from 'react';
import '../Style/Dashboard.css';
/* Dashboard.css */
import 'font-awesome/css/font-awesome.css';

const AllCustomers = () => {
    const [customers, setCustomers] = useState(0);
  
    useEffect(() => {
      const fetchAllCustomers = async () => {
        try {
          const response = await CustomerService.getAllCustomers();
          console.log("list of"+response);
          if (response && Array.isArray(response.data)) {
            const count = response.data.length
            setCustomers(count);
          }
        } catch (error) {
          console.error('Error fetching all customers:', error);
        }
      };
  
      fetchAllCustomers();
    }, []);
  
    return customers;
  };
const NewTaskCount = () => {
    
    const [newTaskCount, setNewTaskCount] = useState(0);

    useEffect(() => {
      const fetchNewTickets = async () => {
        try {
          const response = await TicketService.getNewTickets();

          console.log(response);
  
          if (response && Array.isArray(response.data)) {
            const count = response.data.filter((ticket) => ticket.status === 'New').length;
            setNewTaskCount(count);
          }
        } catch (error) {
          console.error('Error fetching new tickets:', error);
        }
      };
  
      fetchNewTickets();
    }, []);

    return newTaskCount; // Return the count value
};

const usePendingTicketCount = () => {
    const [pendingTicketCount, setPendingTicketCount] = useState(0);
  
    useEffect(() => {
      const fetchPendingTickets = async () => {
        try {
          const response = await TicketService.getPendingTickets();
          if (response && Array.isArray(response.data)) {
            const count = response.data.filter((ticket) => ticket.status === 'ASSIGNED').length;
            setPendingTicketCount(count);
          }
        } catch (error) {
          console.error('Error fetching pending tickets:', error);
        }
      };
  
      fetchPendingTickets();
    }, []);
  
    return pendingTicketCount;
  };
  const useTotalFreeEngCount = () => {
    const [freeEngCount, setFreeEngCount] = useState(0);
  
    useEffect(() => {
      const fetchFreeEng = async () => {
        try {
          const response = await TicketService.getFreeEng();
          if (response && Array.isArray(response.data)) {
            console.log('Free Eng Objects:', response.data); // Log the objects
            const count = response.data.length;
            setFreeEngCount(count);
          }
        } catch (error) {
          console.error('Error fetching pending tickets:', error);
        }
      };
  
      fetchFreeEng();
    }, []);
  
    return freeEngCount;
  }
const CompletedTaskCount = () => {
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  useEffect(() => {
      const fetchCompletedTickets = async () => {
          try {
              const response = await TicketService.getCompletedTickets();

              if (response && Array.isArray(response.data)) {
                  const count = response.data.filter((ticket) => ticket.status === 'Resolved').length;
                  setCompletedTaskCount(count);
              }
          } catch (error) {
              console.error('Error fetching completed tickets:', error);
          }
      };

      fetchCompletedTickets();
  }, []);

  return completedTaskCount;
}

const Dashboard = () => {
    const newTaskCount = NewTaskCount(); // Call the function to get the count
    const completedTaskCount = CompletedTaskCount();
    const allCustomerCount = AllCustomers();
    const allPendingTicketCount = usePendingTicketCount();
    const freeEngCount = useTotalFreeEngCount();

    return (
        <Base>
            <div className="boxes">
                <div className="box box1">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="text">New Task</span>
                    <span className="number" id="newTaskCount">{newTaskCount}</span> {/* Display the count */}
                </div>
                <div className="box box2">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span className="text">Total Customer</span>
                    <span className="number">{allCustomerCount}</span>
                </div>
                <div className="box box3">
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span className="text">Completed Tickets</span>
                    <span className="number">{completedTaskCount}</span>
                </div>
            </div>
            <div className="boxes">
                <div className="box box1">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="text">Total Engineers</span>
                    <span className="number" id="newTaskCount">{newTaskCount}</span> {/* Display the count */}
                </div>
                <div className="box box2">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span className="text">Free Engineers</span>
                    <span className="number">{freeEngCount}</span>
                </div>
                <div className="box box3">
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span className="text">Pending Tickets</span>
                    <span className="number">{allPendingTicketCount}</span>
                </div>
            </div>
        </Base> 
    )
}

export default Dashboard;
