import React, { useState } from 'react';
import '../styles/Experience.css';

function ExperienceForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState({
    companyName: initialData.companyName || '',
    positionTitle: initialData.positionTitle || '',
    responsibilities: initialData.responsibilities || '',
    dateFrom: initialData.dateFrom || '',
    dateUntil: initialData.dateUntil || '',
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
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="responsibilities">Main Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dateFrom">Date From</label>
          <input
            type="text"
            id="dateFrom"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            placeholder="e.g., Jan 2020"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateUntil">Date Until</label>
          <input
            type="text"
            id="dateUntil"
            name="dateUntil"
            value={formData.dateUntil}
            onChange={handleChange}
            placeholder="e.g., Present"
            required
          />
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </form>
  );
}

function ExperienceDisplay({ data }) {
  if (!data.companyName) return null;
  
  return (
    <div className="experience-display">
      <div className="experience-header">
        <h3 className="experience-position">{data.positionTitle}</h3>
        <div className="experience-company">{data.companyName}</div>
      </div>
      <div className="experience-dates">
        {data.dateFrom} - {data.dateUntil}
      </div>
      <div className="experience-responsibilities">
        <p>{data.responsibilities}</p>
      </div>
    </div>
  );
}

export { ExperienceForm, ExperienceDisplay }; 