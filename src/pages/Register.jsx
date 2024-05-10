import React, {useState} from "react";
import logo from '../assets/logo.png'
import user from '../assets/group.png'
import emails from '../assets/user.png'
import lock from '../assets/unlock.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
export default function Register() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
            <div style={{marginTop: '5%'}}>
                <div className='container card' style={{backgroundColor: '#663399', width: 1100}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className="col-md-4">
                            <img src={logo} alt="logo"
                                 style={{
                                     width: 220,
                                     height: 220,
                                     marginLeft: 'auto',
                                     marginTop: '50%',
                                     marginRight: 'auto'
                                 }}/>
                        </div>
                        <div className="mr-1 mt-3" style={{ borderLeftWidth: 6, borderLeftStyle: 'solid', borderColor: '#f5f6fa', height: 600}}></div>
                        <div className="col-md-6">
                            <img src={user} alt="user"
                                 style={{
                                     width: 100,
                                     height: 100,
                                     marginTop: 50,
                                     marginLeft: 'auto',
                                     marginRight: 'auto'
                                 }}/>
                            <Form className="text-white mt-4 mb-5 me-4">
                                <Form.Control
                                    className="form-control-lg"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Firstname"
                                    type="text"
                                    aria-label="firstname"
                                    aria-describedby="firstname"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Lastname"
                                    type="text"
                                    aria-label="Lastname"
                                    aria-describedby="Lastname"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Phone"
                                    type={email}
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    type="password"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Password"
                                    aria-label="password"
                                    aria-describedby="basic-addon1"
                                />
                                <Button variant="primary" type="submit"
                                        className="form-control mt-5 btn btn-lg fw-bolder">
                                    REGISTER
                                </Button>
                            </Form>
                            <span><p className="text-white mt-4">Already Have an Account? <Nav.Link href="/login">Login Now</Nav.Link></p></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
