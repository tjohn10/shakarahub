import React from "react";
import logo from '../assets/logo1.png'
import facebook from '../assets/social/facebook.png'
import twitter from '../assets/social/twitter.png'
import youtube from '../assets/social/youtube.png'
import Nav from "react-bootstrap/Nav";
export default function Footer(){
    return(
        <>
            <div className="container-fluid" style={{backgroundColor: '#663399', color: 'white'}}>
                <div className="d-flex flex-row justify-content-evenly p-3">
                    <h5 className="text-white">Subscribe to our
                        Newsletter</h5>
                    <div>
                        <input type="email" className="form-control-lg" style={{width: 700}} id="exampleInputEmail1"/>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary text-white" type="submit">Subscribe</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-10">
                        <div className="d-flex flex-row justify-content-evenly">
                            <div>
                                <h5>CONTACT US</h5>
                                <p>
                                    123 Address way,
                                    <br />
                                     Lagos,<br />
                                    Nigeria
                                </p>
                            </div>
                            <div>
                                <h5>EXTRAS</h5>
                                <ul style={{listStyle: 'none', textAlign: 'left', marginLeft: -5}}>
                                    <li>Specials</li>
                                    <hr/>
                                    <li>Gift Certificate</li>
                                    <hr/>
                                    <li>Others</li>
                                    <hr/>
                                </ul>
                            </div>
                            <div>
                                <h5>INFORMATION</h5>
                                <ul style={{listStyle: 'none', textAlign: "left", marginLeft: -10}}>
                                    <li>About Us</li>
                                    <hr />
                                    <li>
                                      <Nav.Link href="/faq">FAQs</Nav.Link>
                                    </li>
                                    <hr />
                                    <li>Privacy Policy</li>
                                    <hr />
                                    <li>Terms & Conditions</li>
                                    <hr />
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <h5>MY ACCOUNT</h5>
                                <ul style={{listStyle: 'none',textAlign: 'left', marginLeft: -30}}>
                                    <li>My Account</li>
                                    <hr />
                                    <li>Wish List</li>
                                    <hr/>
                                    <li>Order History</li>
                                    <hr />
                                    <li>News Letter</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <h5 className="">LINKS</h5>
                        <img src={logo} style={{width: 180, height: 180, marginLeft: 'auto', marginRight: "auto"}}/>
                        <div className="d-flex flex-row justify-content-evenly">
                            <div>
                                <img src={facebook}
                                     style={{width: 30, height: 30, marginLeft: 'auto', marginRight: "auto"}}/>
                            </div>
                            <div>
                                <img src={twitter}
                                     style={{width: 30, height: 30, marginLeft: 'auto', marginRight: "auto"}}/>
                            </div>
                            <div>
                                <img src={youtube}
                                     style={{width: 35, height: 35, marginLeft: 'auto', marginRight: "auto"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
