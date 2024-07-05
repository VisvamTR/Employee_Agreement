import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Dashboard from './Components/Dashboard';
import ViewAgreement from './Components/ViewAgreement';
import UpdateAgreement from './Components/UpdateAgreement';
import CreateAgreement from './Components/CreateAgreement';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element = {<Dashboard />} />
          <Route path="/view/:id" element = {<ViewAgreement />} />
          <Route path="/update/:id" element = {<UpdateAgreement/>} />
          <Route path="/create" element = {<CreateAgreement/>} />
        </Routes>
      </Container>
    </Router>
  ); 
}

export default App;
