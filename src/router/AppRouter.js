import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { MainPage } from '../components/main/MainPage';
import { Content_one } from '../components/pages/Content_one';
import { Cont_cinco } from '../components/pages/Cont_cinco';
import { Cont_cuatro } from '../components/pages/Cont_cuatro';
import { Cont_seis } from '../components/pages/Cont_seis';
import { Cont_tres } from '../components/pages/Cont_tres';
import { Cont_two } from '../components/pages/Cont_two';

export const AppRouter = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/contenido-1' element={<Content_one/>}/>
                <Route path='/home/contenido-2' element={<Cont_two/>}/>
                <Route path='/home/contenido-3' element={<Cont_tres/>}/>
                <Route path='/home/contenido-4' element={<Cont_cuatro/>}/>
                <Route path='/home/contenido-5' element={<Cont_cinco/>}/>
                <Route path='/home/contenido-6' element={<Cont_seis/>}/>
                
            </Routes>
        </BrowserRouter>
      </>
  )
};
