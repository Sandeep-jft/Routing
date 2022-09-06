import React from 'react';
import HomeContainer from './container/HomeContainer/HomeContainer';
import { Routes, Route } from 'react-router-dom';
import AboutContainer from './container/AboutContainer/AboutContainer';
import NavbarComponent from './components/Navbar.component';
import NoRouteMatchContainer from './container/NoRouteMatchContainer/NoRouteMatchContainer';
import ProductsContainer from './container/ProductsContainer/ProductsContainer';
import FeaturesContainer from './container/ProductsContainer/FeaturesContainer';
import NewestContainer from './container/ProductsContainer/NewestContainer';

const App = () => {
  return (
    <>
    <NavbarComponent />
    <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='about' element={<AboutContainer />} />
        <Route path = '*' element={<NoRouteMatchContainer />} />
        <Route path='product' element={<ProductsContainer />} >
            <Route path='features' element={<FeaturesContainer />} />
            <Route path='new' element={<NewestContainer />} />
        </Route>
    </Routes>
    </>
  )
}

export default App