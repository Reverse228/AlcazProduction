import React from 'react'
import AboutPart from './components/aboutPart/AboutPart';
import GalleryPart from './components/galleryPart/GalleryPart';
import ServicesPart from './components/servicesPart/ServicesPart';
import StartPart from './components/startPart/StartPart';
import './style/style.css'

const HomePage = () => {
    return <div id='homePage'>
        <StartPart/>
        <AboutPart/>
        <ServicesPart/>
        <GalleryPart/>
    </div>
}

export default HomePage;