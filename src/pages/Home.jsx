import React from "react";
import Header from "../components/Header.jsx";
import {Card, Carousel, Image, InputGroup, Form, Pagination} from "react-bootstrap";
import banner from '../assets/banner1.png'
import ad1 from '../assets/ad1.png'
import Nav from "react-bootstrap/Nav";
import bag from "../assets/products/bag.png";
import product1 from "../assets/products/1.png"
import product2 from "../assets/products/2.png"
import product3 from "../assets/products/3.png"
import product4 from "../assets/products/4.png"
import product5 from "../assets/products/5.png"
import banner1 from "../assets/banners/1.png"
import Footer from "../components/Footer.jsx";


export default function Home(){
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return(
        <div>
            <Header className="mb-5"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-1">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-2 mt-2">
                        <div className="card mt-2" style={{height: 220}}>
                            <div className="card-body">
                                <h3>Card 1</h3>
                            </div>
                        </div>
                        <div className="card mt-2" style={{backgroundColor: '#EEE7F5'}}>
                            <div className="card-body d-flex flex-row justify-content-between">
                                <span>
                                    <h5 className="mt-5">Up to</h5>
                                    <h5 style={{color: 'orange'}}>20%</h5>
                                    <h5>off</h5>
                                </span>
                                <img src={ad1} style={{height: 163}} alt="ads"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{backgroundColor: '#D4C1E8'}}>
                        <h5 className="text-center mt-5">ADIRE</h5>
                        <h5 className="text-center" style={{color: '#4A4A4A'}}>DISCOUNTED</h5>
                        <h5 className="text-center" style={{color: '#F57200', fontSize: 30, fontWeight: 'bold'}}>30
                            %
                            OFF</h5>
                        <h5 className="text-center mb-5" style={{color: '#4A4A4A'}}>ON SALE</h5>
                    </div>
                    <div className="col-md-6" style={{backgroundColor: '#EEE7F5'}}>

                    </div>
                </div>
            </div>
            <section className="mt-4">
                <div className="container">
                    <div className="card row p-3">
                        <div className="col-md-8">
                            <div className="d-flex flex-row justify-content-evenly">
                                <Nav.Link>LATEST</Nav.Link>
                                <Nav.Link>BEST SALE</Nav.Link>
                                <Nav.Link>TOP RATED</Nav.Link>
                                <Nav.Link>ON SALE</Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product1} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product2} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>

                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product3} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product4} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product5} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product1} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product4} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-3">
                            <Card style={{border: "none"}}>
                                <Card.Img variant="top" src={product3} style={{width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 10}} />
                                <Card.Body>
                                    <Card.Title>Authentic African</Card.Title>
                                    <Card.Text>
                                        Batik Tie and Dye short sleeve Unisex
                                        <h5 style={{color: 'grey'}}>&#8358; 20,000</h5>
                                    </Card.Text>
                                </Card.Body>
                                <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                    <InputGroup.Text>Qty</InputGroup.Text>
                                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>
                                        <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 d-flex flex-row justify-content-between">
                    <p className="text-black fw-bolder">Showing results 1 - 8 of 60</p>
                    <Pagination>{items}</Pagination>
                </div>
            </section>
            <section>
                <div className="container mt-4">
                    <img src={banner1} alt="banner-ad" style={{width: '100%'}}/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
