import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ActionMenu from './ActionMenu';

// creating the function called Dashboarad
const Dashboard = () => {
    
    // created the varible for accessing the josn agreenent and setAgreement function for giving functionalities to user datas.
    const [agreements, setAgreements] = useState([]);

    //created the useeffect function inside that calling the fetch agreement function.
    useEffect(() => {
        fetchAgreement();
    }, []);

    //created the arrow function called fetchAgreement
    const fetchAgreement = () => {
        //axios.get is used to get the datas from the json file
        axios.get('http://localhost:5000/agreements')
        .then(response => setAgreements(response.data))
        .catch(error => console.error(error));
    }; 

    //created the function for delete the agreement and whenever we encounter the delete it will show the confirm delete prompt.
    //if we hit enter it will show the confirmation for the delete the particular agreement data
    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to delete the Agreement")){
        //axios.delete is used to the delete data from the json file.
        axios.delete(`http://localhost:5000/agreements/${id}`)
        //And then calling the fetchAgreement func. It will help us to show the remaining datas from the json.
        .then(() => fetchAgreement())
        .catch(error => console.error(error));
    }};

    return (
        <div>
            <h1>Employee Agreement Dashboard</h1>
            {/* created the button called create agreement. The component Link is help us to route the button and
            "to=create" is the address of the component it will consumed in app.js */}
            <Button variant="contained" color="primary" component={Link} to="/create">Create Agreement</Button>
            <Table>
                <TableHead>
                    {/* created the table for employee Name, department, position, agreement date and actions */}
                <TableRow>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Agreement Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {/* The agreements variable is used for javascript maping func to the agreement keys as a array */}
                {agreements.map(agreement => (
                    <TableRow key={agreement.id}>
                    <TableCell>{agreement.employeeName}</TableCell>
                    <TableCell>{agreement.department}</TableCell>
                    <TableCell>{agreement.position}</TableCell>
                    <TableCell>{agreement.agreementDate}</TableCell>
                    <TableCell>
                        {/* ActionMenu is a component consumer to for view, update and delete features */}
                        <ActionMenu agreement={agreement} handleDelete={handleDelete} />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
};

export default Dashboard;
