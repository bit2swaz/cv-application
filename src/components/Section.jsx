import React, { useState } from 'react';
import '../styles/Section.css';

function Section({ title, children, formComponent, initialData }) {
  const [isEditing, setIsEditing] = useState(!initialData);
  const [data, setData] = useState(initialData || {});
  
  const handleSubmit = (newData) => {
    setData(newData);
    setIsEditing(false);
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const FormComponent = formComponent;
  
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {!isEditing && (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
      
      {isEditing ? (
        <FormComponent 
          initialData={data} 
          onSubmit={handleSubmit} 
        />
      ) : (
        <div className="section-content">
          {children(data)}
        </div>
      )}
    </div>
  );
}

export default Section; 