import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Reset from './components/Reset';
import Service2 from './components/Service2'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Formik from './components/Formik';
import Profile from './components/Profile';

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/profile' element={<Profile/>}/>
        {/* <Route path='/service2' element={<Service2/>}/>
        <Route path='/formik' element={<Formik/>}/> */}
      </Routes>
    </Router> 
    </QueryClientProvider> 
    </>
  )
}

export default App;
