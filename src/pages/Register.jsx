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
import header from "../components/Header.jsx";
export default function Register() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const register = (e) => {
        e.preventDefault()
        handleShow()
        setLoading(true)
        fetch(`${API_URL}auth/register`, {
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                password: password
            })
        }).then((res) => res.json())
            .then((resJson) => {
                setLoading(false)
                setResponse(resJson)
                console.log(response, "response")
            })
    }

    return(
        <>
            <div style={{marginTop: '5%'}}>
                <div className='container card' style={{backgroundColor: '#663399'}}>
                    <Modal show={show} onHide={handleClose} centered>
                        {
                            loading ? <Spinner animation="border" className="justify-content-center align-self-center" variant="secondary" /> : (
                                <Modal.Body className="py-5">
                                    {
                                        response.status === true ? (
                                            <div>
                                                <h5 className='text-center mt-4'>{response.message}</h5>
                                                <Nav.Link href="/login">
                                                    <button className="mt-2 btn btn-outline-secondary" style={{marginLeft: '35%', marginRight: '30%'}}>
                                                        Continue to Login
                                                    </button>
                                                </Nav.Link>

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
                        <div className="mr-1 mt-3" style={{ borderLeftWidth: 6, borderLeftStyle: 'solid', borderColor: '#f5f6fa', height: 680}}></div>
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
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    aria-label="firstname"
                                    aria-describedby="firstname"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Lastname"
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    aria-label="Lastname"
                                    aria-describedby="Lastname"
                                />
                                <Form.Control
                                    className="form-control-lg mt-4"
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{backgroundColor: 'white', borderColor: '#fff'}}
                                    placeholder="Password"
                                    aria-label="password"
                                    aria-describedby="basic-addon1"
                                />
                                <Button variant="primary" type="submit"
                                        onClick={register}
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
