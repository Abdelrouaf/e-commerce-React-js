import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { Helmet } from "react-helmet";import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import './Components/Style/Base/Base.module.scss'

function App() {
  return (
    
      <div>

        <Routes>

          <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />

          </Route>

        </Routes>

      </div>

  );
}

export default App;
