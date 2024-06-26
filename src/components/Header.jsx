import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import email from '../assets/email-white.png'
import logo from '../assets/logo-white.svg'
import search from '../assets/loupe.png'
import cart from '../assets/cart.png'
import log from '../assets/user-lock.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {InputGroup, Form} from "react-bootstrap";
import React, {useContext} from "react";
import {CartContext} from "../context/cart.jsx";

function Header() {
    const { cartItems, getCartTotal } = useContext(CartContext)
    return (
        <>
            {/*topbar*/}
            <div className="container-fluid" style={{backgroundColor: '#663399', marginTop: -15}}>
                <div className="d-flex text-white flex-row justify-content-between">
                    <div className="d-flex flex-row p-3 mt-4">
                        <img src={email} alt="email" style={{width: 25, height: 25}}/>
                        <p className="ms-3">info@theshakarahub.com</p>
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

            <Navbar collapseOnSelect expand="lg" style={{width: '100%', backgroundColor: 'white'}}>
                <Navbar.Brand href="/">
                    <img src={logo} alt="email" style={{width: 100, height: 100, marginRight: 250, marginLeft: 20}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className="mb-3">
                                <InputGroup.Text style={{backgroundColor: '#663399', color: 'white'}}>ALL</InputGroup.Text>
                                <Form.Control placeholder="Search for products, brands and categories..." aria-label="Search" className="form-control-lg" style={{width: 750}}/>
                                <InputGroup.Text>
                                    <img src={search} alt="email" style={{width: 25, height: 25}}/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Nav>
                        <Nav style={{marginRight: 20}}>
                            <Nav.Link href="/cart">
                                <img src={cart} alt="email" style={{width: 30, height: 30}}/><span
                                className="badge bg-primary mb-3">{cartItems.length}</span> - &#8358; {getCartTotal()}
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <img src={log} alt="login" style={{width: 30, height: 30}}/> Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            {/*Bottom Nav*/}
            <div className="container-fluid" style={{backgroundColor: '#663399'}}>
                <div className="d-flex flex-row justify-content-evenly p-2 text-white mt-1" >
                    <NavDropdown title="ALL CATEGORIES" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Adire</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/all-products">ALL PRODUCTS</Nav.Link>
                    <Nav.Link href="/today">TODAY'S DEALS</Nav.Link>
                    <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
                </div>
            </div>
        </>
    );
}

export default Header;
