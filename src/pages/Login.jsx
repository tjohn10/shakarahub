import React, {useState} from "react";
import logo from '../assets/logo1.png'
import user from '../assets/group.png'
import emails from '../assets/user.png'
import lock from '../assets/unlock.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {InputGroup, Modal, Spinner} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {API_URL} from "../../config.jsx";
import {useNavigate} from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])
    const handleClose = () => setShow(false);

    const navigate = useNavigate()
    const handleShow = () => setShow(true);

    const login = async (e) => {
        e.preventDefault()
        handleShow()
        setLoading(true)
        await fetch(`${API_URL}auth/login`, {
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((res) => res.json())
            .then((resJson) => {
                setLoading(false)
                setResponse(resJson)
                console.log(response, "response")
                // if(response.status === true){
                //     navigate('/')
                // }

            })
    }


    return(
        <>
            <div style={{marginTop: '10%'}}>
                <Modal show={show} onHide={handleClose} centered>
                    {
                        loading ? <Spinner animation="border" className="justify-content-center align-self-center" variant="secondary" /> : (
                            <Modal.Body className="py-5">
                                {
                                    response.status === true ? (
                                        <div>
                                            <h5 className='text-center mt-4'>{response.message}</h5>
                                                                                   </div>
                                    ) : (
                                        <div>
                                            <h5 className='text-center mt-4'>{response.message}</h5>
                                            {/*<p className="mt-3">*/}
                                            {/*    {response.errors.email}*/}
                                            {/*</p>*/}
                                            <button className=" mt-2 btn btn-danger" style={{marginLeft: '40%'}} onClick={handleClose}>
                                                Try again
                                            </button>
                                        </div>
                                    )
                                }
                            </Modal.Body>
                        )
                    }
                </Modal>
                <div className='container card' style={{backgroundColor: '#663399',borderRadius: 15}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className="col-md-5 py-5">
                            <img src={logo} alt="logo"
                                 style={{
                                     width: 200,
                                     height: 200,
                                     marginLeft: 'auto',
                                     marginTop: '30%',
                                     marginRight: 'auto'
                                 }}/>
                        </div>
                        <div className="mr-1 mt-5" style={{ borderLeftWidth: 6, borderLeftStyle: 'solid', borderColor: '#f5f6fa', height: 500}}></div>
                        <div className="col-md-6 py-5">
                            <img src={user} alt="user"
                                 style={{width: 100, height: 100, marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}/>
                            <Form className="text-white mt-5 w-75 ms-5">
                                <InputGroup size="lg" className="mb-3">
                                    <InputGroup.Text id="basic-addon1">
                                        <img src={emails} style={{width: 30, height: 30}} alt="email"/>
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
                                        <img src={lock} style={{width: 30, height: 30}} alt="lock"/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        className="form-control-lg"
                                        type="password"
                                        style={{backgroundColor: 'white', borderColor: '#fff'}}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        aria-label="password"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button variant="primary" onClick={login} type="submit" className="form-control mt-5 btn btn-lg fw-bolder">
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

