import React, {useState} from "react";
import logo from '../assets/logo.png'
import user from '../assets/group.png'
import emails from '../assets/user.png'
import lock from '../assets/unlock.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
            <div style={{marginTop: '10%'}}>
                <div className='container card' style={{backgroundColor: '#663399', width: 1000, borderRadius: 15}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className="col-md-5">
                            <img src={logo} alt="logo"
                                 style={{
                                     width: 200,
                                     height: 200,
                                     marginLeft: 'auto',
                                     marginTop: '30%',
                                     marginRight: 'auto'
                                 }}/>
                        </div>
                        <div className="mr-1" style={{ borderLeftWidth: 6, borderLeftStyle: 'solid', borderColor: '#f5f6fa', height: 500}}></div>
                        <div className="col-md-6">
                            <img src={user} alt="user"
                                 style={{width: 100, height: 100, marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}/>
                            <Form className="text-white mt-5">
                                <InputGroup size="lg" className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <img src={emails} style={{width: 30, height: 30}}/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        className="form-control-lg"
                                        style={{backgroundColor: 'white', borderColor: '#fff'}}
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup size="lg" className="mb-3 mt-4">
                                    <InputGroup.Text id="basic-addon1">
                                        <img src={lock} style={{width: 30, height: 30}}/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        className="form-control-lg"
                                        type="password"
                                        style={{backgroundColor: 'white', borderColor: '#fff'}}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => e.target.value}
                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button variant="primary" type="submit" className="form-control mt-5 btn btn-lg fw-bolder">
                                    LOGIN
                                </Button>
                            </Form>
                            <span><p className="text-white mt-4">Dont Have an Account? <Nav.Link href="/register">Register Now</Nav.Link></p></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

