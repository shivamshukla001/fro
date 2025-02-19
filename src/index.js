import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Homepage from './landing_page/home/Homepage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductsPage from './landing_page/products/ProductsPage';

import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/support' element={<SupportPage/>} />
    <Route path='/product' element={<ProductsPage/>} />
    <Route path='/pricing' element= {<PricingPage/>} />
    <Route path='*' element= {<NotFound/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  </React.StrictMode>
);


