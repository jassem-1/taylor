import React, { useState } from 'react';
import './SubscribeForm.css'; // You can create a separate CSS file for styling if needed

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any additional logic here, e.g., submitting the email to a server
    // For this example, we'll just display an alert with the message
    alert(`By providing this information, you are opting to receive emails from Taylor Nation with news, special offers, promotions, and messages tailored to your interests, and you agree to the UMG/Taylor Nation privacy policy and terms of use.\n\nInternational customers will receive an email to confirm your subscription to the above mailing list.`);
  };

  return (
    <div className="form-body">
    <form className="subscribe-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email *</label>
      <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
    </div>
    <div className="form-text">
    By providing this information, you are opting to receive emails from Taylor Nation with news, special offers, 
    promotions and messages tailored to your interests, and you agree to the UMG/Taylor Nation privacy policy and terms of use.
Fields marked with an asterisk (*) are required. 
International customers will receive an email to confirm your subscription to above mailing list.
  </div>
    <button type="submit">Subscribe</button>
  </form></div>
   
  
   
  );
};

export default SubscribeForm;
