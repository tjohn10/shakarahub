import React, {useContext} from "react";
import CartHeader from "../components/CartHeader.jsx";
import {CartContext} from "../context/cart.jsx";

export default function Cart(){
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    return(
        <>
            <CartHeader/>
            <div className="mb-1" style={{height: 10, backgroundColor: '#663399'}}/>
            <div className="card mb-3">
                <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                    <p className="mt-2">PRODUCT</p>
                    <div className="d-flex flex-row justify-content-evenly">
                        <p className="me-5">QUANTITY</p>
                        <p className="ms-5 me-5">PRICE</p>
                        <p className="ms-5 me-2">TOTAL</p>
                    </div>
                </div>
            </div>
            {
                cartItems.map((item) => (
                    <div className="row mt-5 mb-5" key={item.id}>
                        <div className="d-flex flex-row justify-content-between ms-2 me-2 p-2">
                            <div className="d-flex flex-row justify-content-between">
                                <div style={{backgroundColor: '#f7f7f7', width: 300, height: 300}}>
                                    <img className="img-fluid" src={item.image} alt="product"
                                         style={{
                                             width: 250,
                                             height: 250,
                                             padding: 10,
                                             marginTop: 25,
                                             marginBottom: 25
                                         }}/>
                                </div>
                                <div className="ms-4 me-2 mt-5">
                                    <p style={{fontWeight: 'normal', fontSize: 20, marginLeft: -20}}>{item.name}</p>
                                    <span className="text-start"><strong>Brand: </strong> Adire</span>

                                    <div className="d-flex flex-row" style={{marginTop: '45%'}}>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => {
                                                removeFromCart(item)
                                            }}
                                        >
                                            Remove
                                        </button>
                                        <button className="btn btn-outline-primary ms-4" onClick={() => {
                                            addToCart(item)
                                        }}>Save for Later</button>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex flex-row justify-content-evenly mt-5">
                                <div className="me-5">
                                    <input type="number" value={item.quantity}
                                           className="form-control ms-2" style={{width: 120}}/>
                                </div>
                                <div className="me-4 ms-4">
                                    <h5 style={{color: 'grey'}}>&#8358;{item.price}</h5>
                                </div>
                                <div className="ms-5 me-4">
                                    <p style={{color: '#663399', fontWeight: 'normal', fontSize: 20}}>₦{getCartTotal()}</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))
            }
            {
                cartItems.length > 0 ? (
                    <div className="flex flex-col justify-between items-center">
                        <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                clearCart()
                            }}
                        >
                            Clear cart
                        </button>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold">Your cart is empty</h1>
                )
            }
            {/*<div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">*/}
            {/*    <h1 className="text-2xl font-bold">Cart</h1>*/}
            {/*    <div className="flex flex-col gap-4">*/}
            {/*        {cartItems.map((item) => (*/}
            {/*            <div className="flex justify-between items-center" key={item.id}>*/}
            {/*                <div className="flex gap-4">*/}
            {/*                    <img src={item.image} alt={item.title} className="rounded-md h-24"/>*/}
            {/*                    <div className="flex flex-col">*/}
            {/*                        <h1 className="text-lg font-bold">{item.name}</h1>*/}
            {/*                        <p className="text-gray-600">{item.price}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="flex gap-4">*/}
            {/*                    <button*/}
            {/*                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"*/}
            {/*                        onClick={() => {*/}
            {/*                            addToCart(item)*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        +*/}
            {/*                    </button>*/}
            {/*                    <p>{item.quantity}</p>*/}
            {/*                    <button*/}
            {/*                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"*/}
            {/*                        onClick={() => {*/}
            {/*                            removeFromCart(item)*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        -*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    {*/}
            {/*        cartItems.length > 0 ? (*/}
            {/*            <div className="flex flex-col justify-between items-center">*/}
            {/*                <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>*/}
            {/*                <button*/}
            {/*                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"*/}
            {/*                    onClick={() => {*/}
            {/*                        clearCart()*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    Clear cart*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        ) : (*/}
            {/*            <h1 className="text-lg font-bold">Your cart is empty</h1>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    )
}
