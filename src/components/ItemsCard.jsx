import React, {useContext} from "react";
import {Card, Form, InputGroup} from "react-bootstrap";
import bag from "../assets/products/bag.png";
import {CartContext} from "../context/cart.jsx";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export default function ItemsCard({product}) {
    const { cartItems, addToCart } = useContext(CartContext)
    return (
        <div className="mt-3">

                <Card style={{border: "none"}}>
                    <Link to={'/product/' + product.id}
                          state={{
                              image: product.image,
                              name: product.name,
                              description: product.description,
                              price: product.price
                          }}
                          style={{textDecoration: 'none'}}>
                    <Card.Img variant="top" src={product.image} style={{
                        width: 200,
                        height: 200,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        marginBottom: 10
                    }}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {/*{product.description}*/}
                            <h5 style={{color: 'grey'}}>&#8358; {product.price}</h5>
                        </Card.Text>
                    </Card.Body>
                    </Link>
                    <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                        <InputGroup.Text style={{marginRight: 5}}>Qty</InputGroup.Text>
                        <Form.Control type="number" placeholder="1"
                                      aria-label="Amount (to the nearest dollar)"/>
                        <InputGroup.Text style={{marginLeft: 5}}>
                            <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                        </InputGroup.Text>
                    </InputGroup>
                </Card>
        </div>
    )
}
