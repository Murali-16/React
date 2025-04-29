
import React from 'react'
import LoginForm from './pages/Auth/LoginForm'
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BankingComplaintForm from './components/ComplaintForm';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
     <BankingComplaintForm/>

    </>
  );
}

export default App
