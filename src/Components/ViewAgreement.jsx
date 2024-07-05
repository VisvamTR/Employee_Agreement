import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ViewAgreement = () => {

    // useparams is used to view the datas from the json
    const { id } = useParams();
    const [agreement, setAgreement] = useState(null);

    useEffect(() => {
        // axios.get is help us to get the employee details from the json
        axios.get(`http://localhost:5000/agreements/${id}`)
        .then(response => setAgreement(response.data))
        .catch(error => console.error(error))
    }, [id]);

    // This if condition will the agreement is true or fale and it will include null, undefined
    // if it is false means it will show the page (Loading...)
    if (!agreement) return <p>Loading...</p>;

    return (
        // The h1 tag and paragraph tags are help us to view the employee details
        // Button is help to navigate to dashboard using the react router dom (Link)
        <div>
            <h1>{agreement.employeeName}</h1>
            <p><strong>Department:</strong> {agreement.department}</p>
            <p><strong>Position:</strong> {agreement.position}</p>
            <p><strong>Agreement Date:</strong> {agreement.agreementDate}</p>
            <Button component={Link} to="/">Back to Dashboard</Button>
        </div>
    )
}

export default ViewAgreement;
