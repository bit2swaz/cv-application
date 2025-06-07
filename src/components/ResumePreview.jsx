import React from 'react';
import '../styles/ResumePreview.css';

function ResumePreview({ generalInfo, educationList, experienceList }) {
  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1 className="resume-name">
          {generalInfo.fullName || 'Your Name'}
        </h1>
        <div className="resume-contact">
          {generalInfo.email && <span>{generalInfo.email}</span>}
          {generalInfo.phone && <span>{generalInfo.phone}</span>}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Education</h2>
        {educationList.length > 0 ? (
          <div className="education-list">
            {educationList.map((education) => (
              education.schoolName ? (
                <div key={education.id} className="education-item">
                  <div className="education-header">
                    <h3 className="education-school">{education.schoolName}</h3>
                    <span className="education-date">{education.dateOfStudy || 'Date'}</span>
                  </div>
                  <p className="education-degree">{education.titleOfStudy || 'Degree'}</p>
                </div>
              ) : null
            ))}
          </div>
        ) : (
          <p className="placeholder-text">Your education information will appear here.</p>
        )}
      </div>

      <div className="resume-section">
        <h2 className="section-title">Experience</h2>
        {experienceList.length > 0 ? (
          <div className="experience-list">
            {experienceList.map((experience) => (
              experience.companyName ? (
                <div key={experience.id} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-position">{experience.positionTitle || 'Position'}</h3>
                    <span className="experience-date">
                      {experience.dateFrom || 'Start Date'} - {experience.currentlyWorking ? 'Present' : experience.dateTo || 'End Date'}
                    </span>
                  </div>
                  <p className="experience-company">{experience.companyName || 'Company'}</p>
                  <p className="experience-description">{experience.responsibilities || 'Responsibilities will be listed here.'}</p>
                </div>
              ) : null
            ))}
          </div>
        ) : (
          <p className="placeholder-text">Your work experience will appear here.</p>
        )}
      </div>
    </div>
  );
}

export default ResumePreview; 