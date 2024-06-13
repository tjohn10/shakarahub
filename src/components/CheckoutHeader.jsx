import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo1.png'
import Navbar from "react-bootstrap/Navbar";
import {Form, InputGroup} from "react-bootstrap";
import search from "../assets/loupe.png";
import cart from "../assets/cart.png";
import log from "../assets/user-lock.png";


export default function CheckoutHeader(){
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
            <Navbar collapseOnSelect expand="lg" style={{width: '100%', backgroundColor: 'white'}}>
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#features">
                            <img src={cart} alt="email" style={{width: 30, height: 30}}/> Cart - &#8358; 24000
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <img src={log} alt="login" style={{width: 30, height: 30}}/> Login / Create Account
                        </Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider/>*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
