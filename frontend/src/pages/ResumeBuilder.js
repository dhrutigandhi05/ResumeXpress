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
}