import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField } from '@mui/material';


// Created the arrow func called updateAgreement inside that creating state variable and its holding properties like
// employeename, department, position and agreementdate and setFormData func for useState.
const UpdateAgreement = () => {

  // useparams is used to view the datas from the json
  const { id } = useParams();
  const [formData, setFormData] = useState({
    employeeName: '',
    department: '',
    position: '',
    agreementDate: '',
  });

  // useNavigate is help us to navigate the pages.
  const navigate = useNavigate();

  useEffect(() => {
     // axios.get is help us to get the employee details from the json
    axios.get(`http://localhost:5000/agreements/${id}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // [e.target.name] is targetting the name of the textfiels
      // e.target.value is targetting the formdata properties
      [e.target.name]: e.target.value,
    });
  };

  // Whenever we hit the submit button, handlesubmit will called and it will put the previous data to update form and then navigate to the dashboard.
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/agreements/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Update Agreement</h1>
      {/* Created a form for updating agreement with the submit button and it will handlesubmit func */}
      <form onSubmit={handleSubmit}>
        <TextField name="employeeName" label="Employee Name" value={formData.employeeName} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="department" label="Department" value={formData.department} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="position" label="Position" value={formData.position} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="agreementDate" label="Agreement Date" type="date" value={formData.agreementDate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
        <Button type="submit" variant="contained" color="primary">Update</Button>
      </form>
    </div>
  );
}

export default UpdateAgreement;
