/*shimon kaldearo 318643368
  chen yakov 209382779*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from './pages/dashboard';
import './pages/dashboard.css'

//the main code in our project that used our react components
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='element'>
 <BrowserRouter>
    
      <Navbar/>
      {/*routes between 2 pages home and dashboard using the navbar when the user click */}
      <Routes>
        
        <Route path='/' element={<Home/>} />
        
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
     
  </BrowserRouter>
  </div>
);


