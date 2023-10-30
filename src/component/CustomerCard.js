import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import '../Style/CustomerCard.css';
const CustomerCard = ({ customer }) => {
  const { customer_id, customer_name, addresses } = customer;

  // Count the number of addresses for the customer
  const numberOfAddresses = addresses.length;

  return (
    <div className="customer-card">
        <Card className='card'>
            <CardContent className='cardContent'>
                <p>ID: {customer_id}</p>
                <p>Name: {customer_name}</p>
                <p>Number of Addresses: {numberOfAddresses}</p>
            </CardContent>
        </Card>
    </div>
  );
};

export default CustomerCard;
