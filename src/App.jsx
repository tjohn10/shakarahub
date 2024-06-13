import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import FAQ from "./pages/FAQ.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import Cart from "./pages/Cart.jsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/product/:id' element={<Product/>}/>
                    <Route path='/all-products' element={<AllProducts/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/account' element={<MyAccount/>}/>
                    <Route path='/contact-us' element={<ContactUs/>}/>
                </Routes>
                {/*<Footer />*/}
            </Router>
        </>
    );
}

export default App
