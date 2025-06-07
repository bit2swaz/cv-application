import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import FormSection from './components/FormSection'
import ResumePreview from './components/ResumePreview'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  // Load data from localStorage or use defaults
  const [generalInfo, setGeneralInfo] = useState(() => {
    const saved = localStorage.getItem('generalInfo');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      email: '',
      phone: ''
    };
  });

  const [educationList, setEducationList] = useState(() => {
    const saved = localStorage.getItem('educationList');
    return saved ? JSON.parse(saved) : [{
      id: Date.now(),
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: ''
    }];
  });

  const [experienceList, setExperienceList] = useState(() => {
    const saved = localStorage.getItem('experienceList');
    return saved ? JSON.parse(saved) : [{
      id: Date.now(),
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: '',
      currentlyWorking: false
    }];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('generalInfo', JSON.stringify(generalInfo));
    localStorage.setItem('educationList', JSON.stringify(educationList));
    localStorage.setItem('experienceList', JSON.stringify(experienceList));
  }, [generalInfo, educationList, experienceList]);

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
      <ThemeToggle />
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
        <p>
          CV Builder | Made with <span className="heart">❤</span> by <a href="https://github.com/bit2swaz" target="_blank" rel="noopener noreferrer">bit2swaz</a>
        </p>
      </footer>
    </div>
  )
}

export default App
