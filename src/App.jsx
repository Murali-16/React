
import React, { useState } from 'react';
import LoginForm from './pages/Auth/LoginForm';
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BankingComplaintForm from './components/ComplaintForm';
import DataTable from './components/DataTable';
import { FormContext } from './context/FormContext';

function App() {
  const [complaintData, setComplaintData] = useState([]);

  const addComplaint = (complaint) => {
    setComplaintData((prev) => [...prev, complaint]); 
    console.log('Updated Data Array:', [...complaintData, complaint]);
  };

  return (
    <FormContext.Provider value={{ complaintData, addComplaint }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/complaints' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/datatable' element={<DataTable />} />
          <Route path='/complaint' element={<BankingComplaintForm addComplaint={addComplaint} />} /> 
        </Routes>
      </BrowserRouter>
    </FormContext.Provider>
  );
}

export default App;
