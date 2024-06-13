import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {CartProvider} from "./context/cart.jsx";
import 'react-multi-carousel/lib/styles.css';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartProvider>
          <App />
      </CartProvider>
  </React.StrictMode>,
)
