import React from 'react';
import '../styles/FormSection.css';

function GeneralForm({ generalInfo, updateGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateGeneralInfo(name, value);
  };

  return (
    <div className="general-form">
      <div className="input-field">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={generalInfo.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="input-field">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>
    </div>
  );
}

export default GeneralForm; 