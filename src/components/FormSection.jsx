import React from 'react';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SectionHeader from './SectionHeader';
import '../styles/FormSection.css';

function FormSection({
  generalInfo,
  educationList,
  experienceList,
  updateGeneralInfo,
  addEducation,
  updateEducation,
  removeEducation,
  addExperience,
  updateExperience,
  removeExperience
}) {
  return (
    <div className="form-section">
      <div className="form-group">
        <SectionHeader title="General Information" />
        <GeneralForm 
          generalInfo={generalInfo} 
          updateGeneralInfo={updateGeneralInfo} 
        />
      </div>

      <div className="form-group">
        <SectionHeader title="Education" />
        {educationList.map((education) => (
          <EducationForm
            key={education.id}
            education={education}
            updateEducation={updateEducation}
            removeEducation={removeEducation}
            isRemovable={educationList.length > 1}
          />
        ))}
        <button 
          type="button" 
          className="add-btn"
          onClick={addEducation}
        >
          Add Education
        </button>
      </div>

      <div className="form-group">
        <SectionHeader title="Experience" />
        {experienceList.map((experience) => (
          <ExperienceForm
            key={experience.id}
            experience={experience}
            updateExperience={updateExperience}
            removeExperience={removeExperience}
            isRemovable={experienceList.length > 1}
          />
        ))}
        <button 
          type="button" 
          className="add-btn"
          onClick={addExperience}
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}

export default FormSection; 