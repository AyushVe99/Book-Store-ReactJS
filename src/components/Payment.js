import React, { useState } from 'react';
import './Payment.css'
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform payment logic here
    console.log('Payment Method:', paymentMethod);
    console.log('Card Number:', cardNumber);
    console.log('Card Name:', cardName);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('UPI ID:', upiId);
    if (
        (paymentMethod === 'upi' && upiId && upiId.includes('@') && upiId.includes('upi')) ||
        (paymentMethod !== 'upi' && cardNumber && cardName && expiryDate && cvv)
      ) {
        
        alert('Your order has been placed. It will be delivered to you soon. Thanks for ordering!');
        
        
        window.location.href = '/';
      } else {
        
        alert('Please fill in all required fields');
      }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="upi">UPI</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
          </select>
        </div>
        {paymentMethod === 'upi' ? (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input type="text" id="upiId" value={upiId} onChange={handleUpiIdChange} required placeholder='Enter Your UPI ID' />
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Card Holder Name</label>
              <input type="text" id="cardName" value={cardName} onChange={handleCardNameChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} required />
              </div>
            </div>
          </>
        )}
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default Payment;
