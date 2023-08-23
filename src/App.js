import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NotFound from './components/404';
import Products from './components/Products';
import Services from './components/Services';
import TopSellings from './components/products/TopSellings';
import FeaturedProducts from './components/products/FeaturedProducts';
import ComboOffers from './components/products/ComboOffers';
import SelectedProduct from './components/products/SelectedProduct';
import Profile from './components/Profile';


function App() {
    return (
        <Router>
            <Navbar />
            <div className='container mt-4'>
                
                    
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />}>
                        <Route index element={<TopSellings />} />
                        <Route path='/products/top-sellings' element={<TopSellings />} >
                            <Route path='/products/top-sellings/product/:id' element={<SelectedProduct />} />
                        </Route>
                        <Route path='/products/featured-products' element={<FeaturedProducts />} />
                        <Route path='/products/combo-offers' element={<ComboOffers />} />
                    </Route>
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
