import React, {useState} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import product from '../assets/product.png'

export default function Product(){
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(40000)
    let total = quantity * price
    return (
        <>
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <h3 style={{fontWeight: "bold", color: 'black', textAlign: "left"}}>ADIRE STYLES</h3>
                </div>
                <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                <div className="card">
                    <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2" >
                        <p className="mt-2">PRODUCT</p>
                        <p className="mt-2">TOTAL</p>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-5" style={{backgroundColor: '#F7F7F7'}}>
                        <img src={product} alt="product" style={{width: 425, height: 500, marginTop: 30, marginRight: 'auto', marginLeft: 'auto', marginBottom: 30}}/>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex flex-row justify-content-between ms-2 me-2 mt-4">
                            <p style={{fontWeight: 'normal', fontSize: 20}}>Adire Styles</p>
                            <p style={{color: '#663399', fontWeight: 'normal', fontSize: 20}}>₦{total}</p>
                        </div>
                        <div className="d-flex flex-row ms-2 me-2">
                            <p className="text-start">Brand:</p> <p className="text-black-50 ms-4">Adire</p>
                        </div>
                        <div className="d-flex flex-row ms-2 me-2">
                            <h5 className="mt-3">Quantity:</h5>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control ms-2" style={{width: 120}}/>
                        </div>
                        <div className="d-flex flex-row ms-2 me-2">
                            <p className="text-start">Price:</p> <p className="text-black-50 ms-4">₦{price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
