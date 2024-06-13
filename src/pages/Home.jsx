import React, {useContext} from "react";
import Header from "../components/Header.jsx";
import {Card, Carousel, Image, InputGroup, Form, Pagination} from "react-bootstrap";
import banner from '../assets/banners/ban_1.png'
import ad1 from '../assets/ad1.png'
import banner1 from "../assets/banners/1.png"
import Footer from "../components/Footer.jsx";

import LatestProducts from "../components/LatestProducts.jsx";
import OnSales from "../components/OnSales.jsx";
import BestSales from "../components/BestSales.jsx";
import TopRated from "../components/TopRated.jsx";
import card1 from '../assets/cards/1.png'
export default function Home(){
    return(
        <div>
            <Header className="mb-5"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-1">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                                {/*<Carousel.Caption>*/}
                                {/*    <h3>First slide label</h3>*/}
                                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                {/*</Carousel.Caption>*/}
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={banner} style={{width: '100%'}}/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-2 mt-2">
                        <div className="card mt-2 mb-3" style={{height: 200}}>
                            <div className="card-body" style={{backgroundColor: '#EEE7F5'}}>
                                <img src={card1} style={{width: '100%'}} alt="img"/>
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
            {/*latest Products*/}
            <section className="mt-4">
                <div className="container">
                    <div className="card py-2" style={{backgroundColor: '#663399', color: 'white'}}>
                        <div className="d-flex mt-2 flex-row justify-content-between ms-3 me-3">
                            <h4>Latest Products</h4>
                            <p>See All</p>
                        </div>

                    </div>
                    <div>
                        <LatestProducts/>
                    </div>
                </div>
            </section>
            {/*ads*/}
            <section>
                <div className="container mt-4">
                    <img src={banner1} alt="banner-ad" style={{width: '100%'}}/>
                </div>
            </section>
            {/*On Sales*/}
            <section className="mt-4">
                <div className="container">
                    <div className="card py-2" style={{backgroundColor: '#663399', color: 'white'}}>
                        <div className="d-flex mt-2 flex-row justify-content-between ms-3 me-3">
                            <h4 className="fw-bold">On Sale</h4>
                            <p className="fw-bold">See All </p>
                        </div>

                    </div>
                    <div>
                        <OnSales/>
                    </div>
                </div>
            </section>
            {/*ads*/}
            <section>
                <div className="container mt-4">
                    <img src={banner1} alt="banner-ad" style={{width: '100%'}}/>
                </div>
            </section>
            {/*Clearance Products*/}
            <section className="mt-4">
                <div className="container">
                    <div className="card py-2" style={{backgroundColor: '#663399', color: 'white'}}>
                        <div className="d-flex mt-2 flex-row justify-content-between ms-3 me-3">
                            <h4>Clearance Sales</h4>
                            <p>See All</p>
                        </div>

                    </div>
                    <div>
                        <LatestProducts/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
