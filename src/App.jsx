
import React from 'react'
import LoginForm from './pages/Auth/LoginForm'
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataTable from './components/DataTable';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/complaints' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/DataTable' element={<DataTable/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
