import React from 'react';
import '../styles/SectionHeader.css';

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader; 