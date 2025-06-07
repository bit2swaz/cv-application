import React, { useState } from 'react';
import '../styles/Education.css';

function EducationForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState({
    schoolName: initialData.schoolName || '',
    titleOfStudy: initialData.titleOfStudy || '',
    dateOfStudy: initialData.dateOfStudy || '',
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
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="titleOfStudy">Title of Study</label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          value={formData.titleOfStudy}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfStudy">Date of Study</label>
        <input
          type="text"
          id="dateOfStudy"
          name="dateOfStudy"
          value={formData.dateOfStudy}
          onChange={handleChange}
          placeholder="e.g., 2018-2022"
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </form>
  );
}

function EducationDisplay({ data }) {
  if (!data.schoolName) return null;
  
  return (
    <div className="education-display">
      <h3 className="education-school">{data.schoolName}</h3>
      <p className="education-title">{data.titleOfStudy}</p>
      <p className="education-date">{data.dateOfStudy}</p>
    </div>
  );
}

export { EducationForm, EducationDisplay }; 