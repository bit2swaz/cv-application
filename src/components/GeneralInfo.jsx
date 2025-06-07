import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfoForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </form>
  );
}

function GeneralInfoDisplay({ data }) {
  return (
    <div className="general-info-display">
      <h2 className="general-info-name">{data.name}</h2>
      <div className="general-info-contact">
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    </div>
  );
}

export { GeneralInfoForm, GeneralInfoDisplay }; 