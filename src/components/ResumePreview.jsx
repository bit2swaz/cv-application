import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import '../styles/ResumePreview.css';

function ResumePreview({ generalInfo, educationList, experienceList }) {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${generalInfo.fullName || 'Resume'}_CV`,
    onAfterPrint: () => console.log('Document printed successfully!'),
  });

  return (
    <>
      <div className="resume-preview" ref={resumeRef}>
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
      
      <div className="export-button-container">
        <button 
          className="export-pdf-button"
          onClick={handlePrint}
          aria-label="Download PDF"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </button>
      </div>
    </>
  );
}

export default ResumePreview; 