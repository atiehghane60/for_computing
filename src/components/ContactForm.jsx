// Import necessary modules and assets
import React, { useState } from 'react';
import './styles/ContactForm.css'; // External CSS for styles

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log('Form submitted:', formData);
  };

  const illustration = "/images/contact_form/illustration.svg";
  const userIcon = "/images/contact_form/user.svg";
  const mailIcon = "/images/contact_form/mail.svg";
  const sendIcon = "/images/contact_form/send.svg";

  return (
    <div className="contact-container">
      <div className="illustration-section">
        <img src={illustration} alt="Contact illustration" className="illustration" />
      </div>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="input-wrapper ">
          <div className="input-group">
            <img src={userIcon} alt="User icon" className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <img src={mailIcon} alt="Mail icon" className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-btn">
            Send message <img src={sendIcon} alt="Send icon" className="send-icon" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
