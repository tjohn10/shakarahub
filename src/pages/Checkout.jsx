import React from "react";
import CheckoutHeader from "../components/CheckoutHeader.jsx";
import Footer from "../components/Footer.jsx";
import Checkout1 from "../components/Checkout1.jsx";
import Checkout2 from "../components/Checkout2.jsx";
import Checkout3 from "../components/Checkout3.jsx";


export default function Checkout() {
    const styles = {
        container:{
            display: 'flex',
            backgroundColor: '#efefef',
        },
        input: {
            backgroundColor: '#FAFAFA',
            height: 50,
            borderColor: '#FAFAFA'
        }
    }
    return(
        <>
            <CheckoutHeader/>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Address
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Delivery
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Payment
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <Checkout1 />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                     aria-labelledby="pills-profile-tab">
                    <Checkout2 />
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                     aria-labelledby="pills-contact-tab">
                    <Checkout3 />
                </div>
            </div>
            <Footer/>
        </>
    )
}
