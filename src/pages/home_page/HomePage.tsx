import React from 'react'
import AboutPart from './components/aboutPart/AboutPart';
import StartPart from './components/startPart/StartPart';
import './style/style.css'

const HomePage = () => {
    return <div id='homePage'>
        <StartPart/>
        <AboutPart/>
    </div>
}

export default HomePage;