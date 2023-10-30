import React, { useState } from 'react';
import Base from '../component/Base';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerService from '../Services/CustomerService'; // Update the path as per your project structure


const AddCustomer = () => {
  const initialAddress = {
    address_line_1: '',
    area: '',
    district: '',
    state: '',
    lat: '',
    longitude: ''
  };

  const [customerData, setCustomerData] = useState({
    customer_name: '',
    customer_contact_person: '',
    customer_email: '',
    customer_phone: '',
    addresses: [initialAddress]
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.includes('addresses')) {
      const addressIndex = name.split('.')[1];
      const updatedAddresses = customerData.addresses.map((address, i) =>
        i === parseInt(addressIndex) ? { ...address, [name.split('.')[2]]: value } : address
      );
      setCustomerData({ ...customerData, addresses: updatedAddresses });
    } else {
      setCustomerData({ ...customerData, [name]: value });
    }
  };

  const deleteAddress = (index) => {
    const filteredAddresses = customerData.addresses.filter((address, i) => i !== index);
    setCustomerData({ ...customerData, addresses: filteredAddresses });
  };

  const addAddress = () => {
    setCustomerData({ ...customerData, addresses: [...customerData.addresses, initialAddress] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the addCustomer function from CustomerService to send the data to the server
      const response = await CustomerService.addCustomer(customerData);
      console.log('New customer added:', response.data); // Log the response or handle it as needed

      toast.success('New customer added successfully!', {
        position: 'top-right',
        autoClose: 3000, // Auto close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      // Clear the form or perform other actions upon successful addition
      setCustomerData({
        customer_name: '',
        customer_contact_person: '',
        customer_email: '',
        customer_phone: '',
        addresses: [initialAddress]
      });
    } catch (error) {
      console.error('Error adding customer:', error);

        toast.error('Failed to add a new customer!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

    }
  };


  return (
    <Base>
      <h1>This is my Add Customer page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input type="text" name="customer_name" value={customerData.customer_name} onChange={handleInputChange} />
        </label>
        <label>
          Contact Person:
          <input type="text" name="customer_contact_person" value={customerData.customer_contact_person} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="text" name="customer_email" value={customerData.customer_email} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="customer_phone" value={customerData.customer_phone} onChange={handleInputChange} />
        </label>
        {customerData.addresses.map((address, index) => (
          <div key={index}>
            <h3>Address {index + 1}</h3>
            <label>
              Address Line 1:
              <input
                type="text"
                name={`addresses.${index}.address_line_1`}
                value={address.address_line_1}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <label>
              Area:
              <input
                type="text"
                name={`addresses.${index}.area`}
                value={address.area}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <label>
              District:
              <input
                type="text"
                name={`addresses.${index}.district`}
                value={address.district}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                name={`addresses.${index}.state`}
                value={address.state}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <label>
              Latitude:
              <input
                type="text"
                name={`addresses.${index}.lat`}
                value={address.lat}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <label>
              Longitude:
              <input
                type="text"
                name={`addresses.${index}.longitude`}
                value={address.longitude}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <button type="button" onClick={() => deleteAddress(index)}>
              Delete Address
            </button>
          </div>
        ))}
        <button type="button" onClick={addAddress}>
          Add Address
        </button>
        <button type="submit">Submit</button>
      </form>
    </Base>
  );
};

export default AddCustomer;
