import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";

function App() {

    return (
        <>
            <Router>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/product' element={<Product/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App
