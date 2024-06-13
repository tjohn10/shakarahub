import React from "react";
import Header from "./Header.jsx";
import Nav from "react-bootstrap/Nav";
import CartHeader from "./CartHeader.jsx";

export default function Checkout3(){
    const styles = {
        input: {
            backgroundColor: '#FAFAFA',
            height: 50,
            borderColor: '#FAFAFA'
        }
    }
    return(
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mt-1 me-2 bg-white">
                        <div className="row mt-5">
                            <h3 style={{color: 'black', textAlign: "left"}}>Checkout</h3>
                        </div>
                        <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                        <div className="card">
                            <div className="text-start ms-2 me-2 p-2">
                                <p className="mt-2">Payment DETAILS</p>
                            </div>
                        </div>
                        <div>
                            <div className="row mt-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name"
                                           aria-label="First name" style={styles.input}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"
                                           aria-label="Last name" style={styles.input}/>
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Mobile Number (+234)" style={styles.input}/>
                            </div>
                            <div className="mb-3 mt-3">
                                  <textarea className="form-control" id="exampleFormControlTextarea1"
                                            rows="3"></textarea>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="city"
                                           aria-label="First name" style={styles.input}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="State/Region"
                                           aria-label="Last name" style={styles.input}/>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Nav.Link href="/checkout">
                                    <button className="btn form-control"
                                            style={{backgroundColor: '#663399', color: 'white', height: 60, borderRadius: 5}}>
                                        Proceed to Next Step
                                    </button>
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1 ms-2 bg-white">
                        <div className="row mt-5">
                            <h3 className="text-black-50 text-center">Checkout</h3>
                        </div>
                        <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                        <div className="card" style={{backgroundColor: '#EEE7F5'}}>
                            <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                                <p className="mt-2">Subtotal</p>
                                <p className="mt-2">₦3000.00</p>
                            </div>
                            <hr className="ms-2 me-2"/>
                            <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                                <p className="mt-2">Delivery fee</p>
                                <p className="mt-2">₦1,500.00</p>
                            </div>
                            <hr className="ms-2 me-2"/>
                            <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                                <p className="mt-2">Total</p>
                                <h4 className="mt-2" style={{color: '#663399'}}>₦4,500.00</h4>
                            </div>
                            <div className="mt-3">
                                <Nav.Link href="/checkout">
                                    <button className="btn form-control w-75 mb-3"
                                            style={{
                                                backgroundColor: '#663399',
                                                color: 'white',
                                                height: 60,
                                            }}>
                                        MODIFY CART
                                    </button>
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
