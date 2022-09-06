import React from 'react';
import HomeContainer from './container/HomeContainer/HomeContainer';
import { Routes, Route } from 'react-router-dom';
// import AboutContainer from './container/AboutContainer/AboutContainer';
import NavbarComponent from './components/Navbar.component';
import NoRouteMatchContainer from './container/NoRouteMatchContainer/NoRouteMatchContainer';
import ProductsContainer from './container/ProductsContainer/ProductsContainer';
import FeaturesContainer from './container/ProductsContainer/FeaturesContainer';
import NewestContainer from './container/ProductsContainer/NewestContainer';
import UsersContainer from './container/UsersContainer/UsersContainer';
import UserDetailsContainer from './container/UserDetailsContainer/UserDetailsContainer';
import AdminContainer from './container/AdminContainer/AdminContainer';
const AboutContainer = React.lazy(()=>import('./container/AboutContainer/AboutContainer'))

const App = () => {
  return (
    <>
    <NavbarComponent />
    <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='about' element={
            <React.Suspense fallback={'Loading...'} >
                <AboutContainer />
            </React.Suspense>
        } />
        <Route path = '*' element={<NoRouteMatchContainer />} />
        <Route path='product' element={<ProductsContainer />} >
            {/* render the features page data initially  */}
            <Route index element={<FeaturesContainer />} /> 
            <Route path='features' element={<FeaturesContainer />} />
            <Route path='new' element={<NewestContainer />} />
        </Route>
        {/* <Route path='users' element={<UsersContainer />} />
        <Route path='users/:userId' element={<UserDetailsContainer />} />
        <Route path='users/admin' element={<AdminContainer />} /> */}
        <Route path='users' element={<UsersContainer />} >
            <Route path=':userId' element={<UserDetailsContainer />} />
            <Route path='admin' element={<AdminContainer />} />
        </Route>
    </Routes>
    </>
  )
}

export default App