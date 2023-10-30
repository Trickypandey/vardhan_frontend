import React, { useState, useEffect } from 'react';
import CustomerService from '../Services/CustomerService'; // Update the path as per your project structure
import Base from '../component/Base';
import CustomerCard from '../component/CustomerCard';

const CustomerDashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch all customers when the component mounts
    const fetchCustomers = async () => {
      try {
        const response = await CustomerService.getAllCustomers();
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []); // Empty dependency array means this effect runs only once

  const handleEdit = (customerId) => {
    // Implement logic to edit a specific customer
    // You can navigate to an edit page or modal to update customer details
    console.log('Edit customer with ID:', customerId);
  };

  const handleDelete = async (customerId) => {
    try {
      // Implement logic to delete a specific customer
      await CustomerService.deleteCustomer(customerId);
      setCustomers(customers.filter((customer) => customer.id !== customerId));
      console.log('Customer deleted:', customerId);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <Base>
        <div>
            <h1>Customer Dashboard</h1>
            {customers.map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
            ))}
        </div>
    </Base>
  );
};

export default CustomerDashboard;
