import React, {useContext} from "react";
import products from "../../products.json";
import ProductCard from "./ProductCard.jsx";
import Carousel from 'react-multi-carousel';
import {Link} from "react-router-dom";
import {Card, Form, InputGroup} from "react-bootstrap";
import bag from "../assets/products/bag.png";
import {CartContext} from "../context/cart.jsx";
import ItemsCard from "./ItemsCard.jsx";


export default function OnSales(){
    const { cartItems, addToCart } = useContext(CartContext)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return(
        <>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index}>
                                    <ItemsCard product={product}/>
                                </div>
                                // <div className="mt-3" key={index}>
                                //     <Link to='product/${product.id}'>
                                //         <Card style={{border: "none"}}>
                                //             <Card.Img variant="top" src={product.image} style={{
                                //                 width: 200,
                                //                 height: 200,
                                //                 marginLeft: 'auto',
                                //                 marginRight: 'auto',
                                //                 marginTop: 20,
                                //                 marginBottom: 10
                                //             }}/>
                                //             <Card.Body>
                                //                 <Card.Title>{product.name}</Card.Title>
                                //                 <Card.Text>
                                //                     {product.description}
                                //                     <h5 style={{color: 'grey'}}>&#8358; {product.price}</h5>
                                //                 </Card.Text>
                                //             </Card.Body>
                                //             <InputGroup className="mb-3" style={{width: 200, marginLeft: 50}}>
                                //                 <InputGroup.Text style={{marginRight: 5}}>Qty</InputGroup.Text>
                                //                 <Form.Control type="number" placeholder="1"
                                //                               aria-label="Amount (to the nearest dollar)"/>
                                //                 <InputGroup.Text onClick={addToCart} style={{marginLeft: 5}}>
                                //                     <img src={bag} style={{width: 20, height: 20}} alt="bag"/>
                                //                 </InputGroup.Text>
                                //             </InputGroup>
                                //         </Card>
                                //     </Link>
                                // </div>

                            )
                        })
                    }
            </Carousel>
        </>
    )
}
