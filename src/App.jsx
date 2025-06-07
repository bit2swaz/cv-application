import React, { useState } from 'react'
import Header from './components/Header'
import FormSection from './components/FormSection'
import ResumePreview from './components/ResumePreview'
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [educationList, setEducationList] = useState([{
    id: Date.now(),
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  }]);

  const [experienceList, setExperienceList] = useState([{
    id: Date.now(),
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: '',
    currentlyWorking: false
  }]);

  const updateGeneralInfo = (field, value) => {
    setGeneralInfo({
      ...generalInfo,
      [field]: value
    });
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        id: Date.now(),
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
      }
    ]);
  };

  const updateEducation = (id, field, value) => {
    setEducationList(educationList.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id) => {
    if (educationList.length > 1) {
      setEducationList(educationList.filter(edu => edu.id !== id));
    }
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: Date.now(),
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
        currentlyWorking: false
      }
    ]);
  };

  const updateExperience = (id, field, value) => {
    setExperienceList(experienceList.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const removeExperience = (id) => {
    if (experienceList.length > 1) {
      setExperienceList(experienceList.filter(exp => exp.id !== id));
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="app-container">
        <div className="form-container">
          <FormSection 
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
            updateGeneralInfo={updateGeneralInfo}
            addEducation={addEducation}
            updateEducation={updateEducation}
            removeEducation={removeEducation}
            addExperience={addExperience}
            updateExperience={updateExperience}
            removeExperience={removeExperience}
          />
        </div>
        <div className="preview-container">
          <ResumePreview 
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>
      </main>
      <footer className="app-footer">
        <p>Resume Builder - Built with React</p>
      </footer>
    </div>
  )
}

export default App
