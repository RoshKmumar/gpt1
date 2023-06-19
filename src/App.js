import React from 'react';
import {Footer,Blog,Possibility,Header,Features,WhatGPT3} from './containers';
import {Cta,Navbar,Brand} from './components';
import './app.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>        
    </div>
  )
}

export default App