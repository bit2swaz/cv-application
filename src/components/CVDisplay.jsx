import React from 'react';
import Section from './Section';
import { GeneralInfoForm, GeneralInfoDisplay } from './GeneralInfo';
import { EducationForm, EducationDisplay } from './Education';
import { ExperienceForm, ExperienceDisplay } from './Experience';
import '../styles/CVDisplay.css';

function CVDisplay() {
  return (
    <div className="cv-display">
      <Section 
        title="General Information"
        formComponent={GeneralInfoForm}
        initialData={null}
      >
        {(data) => <GeneralInfoDisplay data={data} />}
      </Section>

      <Section 
        title="Education"
        formComponent={EducationForm}
        initialData={null}
      >
        {(data) => <EducationDisplay data={data} />}
      </Section>

      <Section 
        title="Experience"
        formComponent={ExperienceForm}
        initialData={null}
      >
        {(data) => <ExperienceDisplay data={data} />}
      </Section>
    </div>
  );
}

export default CVDisplay; 