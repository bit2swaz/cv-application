import React from 'react';
import '../styles/FormSection.css';

function ExperienceForm({ experience, updateExperience, removeExperience, isRemovable }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    updateExperience(experience.id, name, newValue);
  };

  const handleRemove = () => {
    removeExperience(experience.id);
  };

  return (
    <div className="experience-form">
      <div className="input-field">
        <label htmlFor={`companyName-${experience.id}`}>Company Name</label>
        <input
          type="text"
          id={`companyName-${experience.id}`}
          name="companyName"
          value={experience.companyName}
          onChange={handleChange}
          placeholder="Example Corp"
        />
      </div>

      <div className="input-field">
        <label htmlFor={`positionTitle-${experience.id}`}>Position Title</label>
        <input
          type="text"
          id={`positionTitle-${experience.id}`}
          name="positionTitle"
          value={experience.positionTitle}
          onChange={handleChange}
          placeholder="Software Engineer"
        />
      </div>

      <div className="input-field">
        <label htmlFor={`responsibilities-${experience.id}`}>Responsibilities</label>
        <textarea
          id={`responsibilities-${experience.id}`}
          name="responsibilities"
          value={experience.responsibilities}
          onChange={handleChange}
          placeholder="Describe your key responsibilities and achievements..."
        />
      </div>

      <div className="form-row">
        <div className="input-field">
          <label htmlFor={`dateFrom-${experience.id}`}>From</label>
          <input
            type="text"
            id={`dateFrom-${experience.id}`}
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
            placeholder="Jan 2020"
          />
        </div>

        <div className="input-field">
          <label htmlFor={`dateTo-${experience.id}`}>To</label>
          <input
            type="text"
            id={`dateTo-${experience.id}`}
            name="dateTo"
            value={experience.dateTo}
            onChange={handleChange}
            placeholder="Present"
            disabled={experience.currentlyWorking}
          />
        </div>
      </div>

      <div className="checkbox-field">
        <input
          type="checkbox"
          id={`currentlyWorking-${experience.id}`}
          name="currentlyWorking"
          checked={experience.currentlyWorking}
          onChange={handleChange}
        />
        <label htmlFor={`currentlyWorking-${experience.id}`}>
          I am currently working here
        </label>
      </div>

      {isRemovable && (
        <button
          type="button"
          className="remove-btn"
          onClick={handleRemove}
        >
          Remove Experience
        </button>
      )}
    </div>
  );
}

export default ExperienceForm; 