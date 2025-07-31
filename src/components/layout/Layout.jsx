 import React from 'react'
 import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Paragraph from '../paragraph/Paragraph';
import Navbar from '../navbar/Navbar';

 export default function Layout() {
   return (
     <>

     <Navbar/>
     <div className='pt-30'>
     <Outlet/>
     </div>
     <Footer/>
     <Paragraph/>

     </>
   )
 }
 