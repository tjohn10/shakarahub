import React, {useContext, useState} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import product from '../assets/product.png'
import Nav from "react-bootstrap/Nav";
import {Card, Form, InputGroup} from "react-bootstrap";
import product1 from "../assets/products/1.png";
import bag from "../assets/products/bag.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import {CartContext} from "../context/cart.jsx";
import {useLocation} from "react-router-dom";

export default function Product() {
    const {cartItems, addToCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const location = useLocation()
    const image = location.state.image
    const name = location.state.name
    const price = location.state.price
    const description = location.state.description
    console.log(description, "description")
    let total = quantity * price
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    <h3 style={{fontWeight: "bold", color: 'black', textAlign: "left"}}>ADIRE STYLES</h3>
                </div>
                <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                <div className="card">
                    <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                        <p className="mt-2">PRODUCT</p>
                        <p className="mt-2">TOTAL</p>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-5" style={{backgroundColor: '#F7F7F7'}}>
                        <img src={image} alt="product" style={{
                            width: 425,
                            height: 400,
                            marginTop: 30,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginBottom: 30
                        }}/>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex flex-row justify-content-between ms-2 me-2 mt-4">
                            <p style={{fontWeight: 'normal', fontSize: 20}}>{name}</p>
                            <p style={{color: '#663399', fontWeight: 'normal', fontSize: 20}}>₦{total}</p>
                        </div>
                        <div className="d-flex flex-row ms-2 me-2">
                            <p className="text-start">Brand:</p> <p className="text-black-50 ms-4">Adire</p>
                        </div>
                        <div className="d-flex flex-row ms-2 me-2" style={{marginTop: '20%'}}>
                            <h5 className="mt-3">Quantity:</h5>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                   className="form-control ms-2" style={{width: 120}}/>
                        </div>
                        <div className="d-flex flex-row ms-2 mt-4 me-2">
                            <h5 className="text-start">Price:</h5> <p className="text-black-50 ms-4">₦{price}</p>
                        </div>
                        <div className="mt-5">
                            <Nav.Link href="/checkout">
                                <button className="btn form-control"
                                        style={{backgroundColor: '#663399', color: 'white'}}>Checkout
                                </button>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                style={{fontSize: 20, fontWeight: "bold"}}
                                data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">
                            Product Description
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                style={{fontSize: 20, fontWeight: "bold"}}
                                data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Product Specification
                        </button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                style={{fontSize: 20, fontWeight: "bold"}}
                                data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">Reviews
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent" style={{backgroundColor: '#efefef'}}>
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                         aria-labelledby="nav-home-tab">
                        <p className="fw-bolder p-5">
                            {description}
                        </p>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                         aria-labelledby="nav-profile-tab">
                        <p className="fw-bolder p-5">
                            Adire/Kampala Tye & Dye Bubu, women bubu, one size fits all, African Kaftan, Long African
                            women bubu, Handmade with Aso Oke.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                         aria-labelledby="nav-contact-tab">
                        <p className="fw-bolder p-5">
                            Adire/Kampala Tye & Dye Bubu, women bubu, one size fits all, African Kaftan, Long African
                            women bubu, Handmade with Aso Oke.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                <div className="card mb-3">
                    <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                        <p className="mt-2">Similar Products</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product1} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product2} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>

                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product3} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product4} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
                <div className="card mb-3">
                    <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                        <p className="mt-2">You may also Like</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product1} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product2} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>

                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product3} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Card style={{border: "none"}}>
                            <Card.Img variant="top" src={product4} style={{
                                width: 200,
                                height: 200,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 20,
                                marginBottom: 10
                            }}/>
                            <Card.Body>
                                <Card.Title>Authentic African</Card.Title>
                                <Card.Text>
                                    Batik Tie and Dye short sleeve Unisex
                                    <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                </Card.Text>
                            </Card.Body>
                            <InputGroup className="mb-3" style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}>
                                <InputGroup.Text>Qty</InputGroup.Text>
                                <Form.Control type="number" aria-label="Amount (to the nearest dollar)"/>
                                <InputGroup.Text onClick={() => addToCart(product)}>
                                    <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </div>
                </div>
            </div>
            <hr className="mt-5 mb-5"/>
        </>
    )
}
