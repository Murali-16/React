
import React from 'react'
import LoginForm from './pages/Auth/LoginForm'
import SignUp from './pages/Auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
