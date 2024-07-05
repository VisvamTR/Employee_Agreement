import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField} from '@mui/material';


// Created the arrow func called createAgreement inside that creating state variable and its holding properties like
// employeename, department, position and agreementdate and setFormData func for useState.
const CreateAgreement = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        department: '',
        position: '',
        agreementDate: '',
    });

    // useNavigate is help us to navigate the pages.
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,

            // [e.target.name] is targetting the name of the textfiels
            // e.target.value is targetting the formdata properties
            [e.target.name]: e.target.value,
        })
    }

    // Whenever we hit the submit button, handlesubmit will called and it will post the data to json file and then navigate to the dashboard.
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/agreements', formData)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Create Agreement</h1>
            {/* Created a form for creating new agreement with the submit button and it will handlesubmit func */}
            <form onSubmit={handlesubmit}>
                <TextField name="employeeName" label="Employee Name" value={formData.employeeName} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="department" label="Department" value={formData.department} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="position" label="Position" value={formData.position} onChange={handleChange} fullWidth margin="normal" />
                <TextField name="agreementDate" label="Agreement Date" type="date" value={formData.agreementDate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                <Button type="submit" variant="contained" color="primary">Create</Button>
            </form>
        </div>
    )
}

export default CreateAgreement
