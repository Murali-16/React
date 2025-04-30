 
import React from 'react'
import LoginForm from './pages/Auth/LoginForm'
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BankingComplaintForm from './components/ComplaintForm';
import DataTable from './components/DataTable';
import { FormContext } from './context/FormContext';

function App() {
  return (
    <>
    <FormContext.Provider value=''>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/complaints' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/DataTable' element={<DataTable/>}/>
     </Routes>
    </BrowserRouter>
    </FormContext.Provider>
    </>
  );
}

export default App
