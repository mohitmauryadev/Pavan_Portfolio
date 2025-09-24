import { useState } from 'react'
import './App.css'
import HeaderWithLogo from './Components/HeaderWithLogo'
import Hero from './Sections/Hero'
import Connections from './Sections/Connections'
import Web from './Sections/Web'
import About from './Sections/About'
import Learn from './Sections/Learn'
import Project from './Sections/Project'
import Customer from './Sections/Customer'
import Form from './Sections/Form'
import Footer from './Components/Footer'


function App() {


  return (
   <div className='Compo'>
   

  

    {/* Header Added */}
    <div className='fixed z-50'>  <HeaderWithLogo/> </div>
       
   
    {/* Hero Section Added */}
    <div className='relative top-[70px]'>  <Hero/> </div>
    
    {/* Social Connections */}
    <div className='relative top-35 '><Connections/></div>

    

    <div className='relative top-35'><About/></div>

      <div className='relative top-35'><Web/></div>
     {/* Learn Section */}
    <div className='relative top-35'><Learn/></div>

     {/* Project Section */}
      <div className='relative top-35'><Project/></div>

       {/* Customer Section */}
      <div className='relative top-35'><Customer/></div>

       {/* Form Section */}
      <div className='relative top-40'><Form/></div>

        {/* Footer section */}
        <div className='relative top-35'><Footer/></div>
   </div>
    
  )
}

export default App
