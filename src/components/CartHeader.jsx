import React from "react";
import email from "../assets/email-white.png";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo1.png'


export default function CartHeader(){
    return (
        <div className="container-fluid" style={{backgroundColor: '#663399', marginTop: -15}}>
            <div className="d-flex text-white flex-row justify-content-between">
                <div className="d-flex flex-row p-3">
                    <Nav.Link href="/">
                        <img src={logo} alt="logo" style={{width: 80, height: 80}}/>
                    </Nav.Link>
                </div>
                <div className="d-flex flex-row p-3 mt-4">
                    <p className="me-2">NGN</p>
                    <div className="mr-2" style={{
                        borderLeftWidth: 2,
                        borderColor: 'white',
                        height: 24,
                        borderLeftStyle: 'solid'
                    }}></div>
                    <p className="me-2 ms-2">ENGLISH</p>
                    <div className="mr-2" style={{
                        borderLeftWidth: 2,
                        borderColor: 'white',
                        height: 24,
                        borderLeftStyle: 'solid'
                    }}></div>
                    <Nav.Link href="/checkout"><p className="ms-2">Checkout</p></Nav.Link>
                </div>
            </div>
        </div>
    )
}
