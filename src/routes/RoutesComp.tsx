import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home_page/HomePage';
import ServicesPage from '../pages/services_page/ServicesPage';

const RoutesComp = () => {
    return <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
    </Routes>
}

export default RoutesComp