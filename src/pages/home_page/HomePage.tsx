import React from 'react'
import Footer from '../../components/footer/Footer';
import AboutPart from './components/aboutPart/AboutPart';
import FormPart from './components/formPart/FormPart';
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
        <FormPart/>
    </div>
}

export default HomePage;