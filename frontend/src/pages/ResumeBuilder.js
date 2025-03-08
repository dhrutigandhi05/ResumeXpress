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

    
};