import React from "react";
import Header from "../components/Header.jsx";
import banner from '../assets/banners/hero-image.jpg'
import Footer from "../components/Footer.jsx";
import location from '../assets/icons/location.png'
import phone from '../assets/icons/phone.png'
import email from '../assets/icons/email.png'

export default function ContactUs(){
    return(
        <>
            <Header/>
            <section className="py-3">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-md-7 col-sm-7">
                            <div>
                                <h4 className="fw-bold mt-3 mb-3">Need Help?</h4>
                                <p className="text-black-50">Reach out to the world’s most reliable eccommerce services</p>
                            </div>
                            <div className="py-3">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="name" placeholder="Name" style={{height: 48, backgroundColor: '#FAFAFA'}}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" id="email" placeholder="Email" style={{height: 48, backgroundColor: '#FAFAFA'}}/>
                                    </div>
                                    <div className="col-12">
                                        <input type="tel" className="form-control" id="phone"
                                               placeholder="Phone" style={{height: 48, backgroundColor: '#FAFAFA'}}/>
                                    </div>
                                    <div className="mb-3">
                                        <textarea style={{backgroundColor: '#FAFAFA'}} className="form-control" id="message" placeholder="Mesage"
                                                  rows="3"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn form-control fw-bold p-3 text-white`" style={{backgroundColor: '#663399'}}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active fw-bold" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected="true">
                                        <h4 className="fw-bolder text-black-50 pb-3">Address</h4>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">
                                        <h4 className="fw-bolder text-black-50 pb-3">Google Maps</h4>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                     aria-labelledby="pills-home-tab">
                                    <div className="d-flex flex-row">
                                        <img alt="loction" src={location} style={{width: 70, height: 70}}/>
                                        <div className="ms-3">
                                            <h5 className="fw-bold">OUR LOCATION</h5>
                                            <p className="text-black-50">Lekki, Lagos</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-2">
                                        <img alt="loction" src={email} style={{width: 70, height: 70}}/>
                                        <div className="ms-3">
                                            <h5 className="fw-bold">SEND US EMAIL</h5>
                                            <p className="text-black-50">info@shakarahub.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-2">
                                        <img alt="loction" src={phone} style={{width: 70, height: 70}}/>
                                        <div className="ms-3">
                                            <h5 className="fw-bold">CALL US</h5>
                                            <p className="text-black-50">08023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                     aria-labelledby="pills-profile-tab">...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
