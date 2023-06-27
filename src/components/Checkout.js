import React, { useState } from 'react';
import './Checkout.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your checkout logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Country:', country);
    if (firstName && lastName && email && phoneNumber && address && city && state && country) {
        window.location.href = '/about';
    }
    else{
        console.log('Please fill in all fields');
    }
  };

  return (
    <div className="checkout-page">
        <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" value={address} onChange={handleAddressChange} required></textarea>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={city} onChange={handleCityChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" value={state} onChange={handleStateChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" value={country} onChange={handleCountryChange} required />
          </div>
        </div>
        <button onClick={handleSubmit} type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
