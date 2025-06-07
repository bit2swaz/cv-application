import React from 'react';
import '../styles/FormSection.css';

function EducationForm({ education, updateEducation, removeEducation, isRemovable }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEducation(education.id, name, value);
  };

  const handleRemove = () => {
    removeEducation(education.id);
  };

  return (
    <div className="education-form">
      <div className="input-field">
        <label htmlFor={`schoolName-${education.id}`}>School Name</label>
        <input
          type="text"
          id={`schoolName-${education.id}`}
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
          placeholder="University of Example"
        />
      </div>

      <div className="input-field">
        <label htmlFor={`titleOfStudy-${education.id}`}>Title of Study</label>
        <input
          type="text"
          id={`titleOfStudy-${education.id}`}
          name="titleOfStudy"
          value={education.titleOfStudy}
          onChange={handleChange}
          placeholder="Bachelor of Science in Computer Science"
        />
      </div>

      <div className="input-field">
        <label htmlFor={`dateOfStudy-${education.id}`}>Date of Study</label>
        <input
          type="text"
          id={`dateOfStudy-${education.id}`}
          name="dateOfStudy"
          value={education.dateOfStudy}
          onChange={handleChange}
          placeholder="2018 - 2022"
        />
      </div>

      {isRemovable && (
        <button
          type="button"
          className="remove-btn"
          onClick={handleRemove}
        >
          Remove Education
        </button>
      )}
    </div>
  );
}

export default EducationForm; 