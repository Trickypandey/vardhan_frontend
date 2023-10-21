import Base from '../component/Base';
import TicketService from '../Services/TicketService';
import React, { useEffect, useState } from 'react';
import '../Style/Dashboard.css';

const NewTaskCount = () => {
    const [newTaskCount, setNewTaskCount] = useState(0);
  
    useEffect(() => {
      const fetchNewTickets = async () => {
        try {
          const response = await TicketService.getNewTickets();
  
          if (response && Array.isArray(response.data)) {
            const count = response.data.filter((ticket) => ticket.status === 'NEW').length;
            setNewTaskCount(count);
          }
        } catch (error) {
          console.error('Error fetching new tickets:', error);
        }
      };
  
      fetchNewTickets();
    }, []);
}
const Dashboard=()=>{

    return(
        <Base>
            <div class="boxes">
                <div class="box box1">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <span class="text">New Task</span>
                    <span class="number" id="newTaskCount">{NewTaskCount}</span>
                </div>
                <div class="box box2">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <span class="text">Total Customer</span>
                    <span class="number">22</span>
                </div>
                <div class="box box3">
                    <i class="fa fa-share" aria-hidden="true"></i>
                    <span class="text">Completed Task</span>
                    <span class="number">22</span>
                </div>
            </div>
        </Base> 
    )
}

export default Dashboard;