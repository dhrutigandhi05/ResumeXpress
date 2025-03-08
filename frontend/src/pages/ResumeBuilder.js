import React from "react";
import { useState } from "react";

const ResumeBuilder = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);

    const handleAddExperience = () => {
        setExperience([...experience, {company: '', position: '', description: ''}]);
    };

    const handleGenerateDescription = async (index) => {
        const response = await fetch('http://127.0.0.1:8000/generate-description', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({input: experience[index].position})
        });

        const data = await response.json();
        const updatedExperience = [...experience];
        updatedExperience[index].description = data.generated_description;
        setExperience(updatedExperience);
    };

    return (
        <div>
            <h2>Build Your Resume</h2>
            {/* Personal Details */}
            <input type="text" placeholder="Name" 
                value={personalDetails.name} 
                onChange={(e) => setPersonalDetails({...personalDetails, name: e.target.value})}
            />
            <input type="email" placeholder="Email" 
                value={personalDetails.email} 
                onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
            />
            <input type="text" placeholder="Phone" 
                value={personalDetails.phone} 
                onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
            />
            {/* Work Experience */}
            {experience.map((exp, index) => (
                <div key={index}>
                    <input type="text" placeholder="Company" 
                        value={exp.company} 
                        onChange={(e) => {
                            const updatedExperience = [...experience];
                            updatedExperience[index].company = e.target.value;
                            setExperience(updatedExperience);
                        }}
                    />
                    <input type="text" placeholder="Position" 
                        value={exp.position} 
                        onChange={(e) => {
                            const updatedExperience = [...experience];
                            updatedExperience[index].position = e.target.value;
                            setExperience(updatedExperience);
                        }}
                    />
                    <button onClick={() => handleGenerateDescription(index)}>
                        Generate Description
                    </button>
                    <textarea 
                        placeholder="Description"
                        value={exp.description}
                        readOnly
                    />
                </div>
            ))}

            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    );
};