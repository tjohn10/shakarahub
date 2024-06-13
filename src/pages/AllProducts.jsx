import React, {useContext, useEffect, useState} from "react";
import ProductCard from "../components/ProductCard.jsx";
import Header from "../components/Header.jsx";
import products from '../../products.json'
import Footer from "../components/Footer.jsx";
import {API_URL} from "../../config.jsx";
import { Spinner} from "react-bootstrap";
import { CartContext } from '../context/cart'
import ReactPaginate from 'react-paginate';
export default function AllProducts(){
    const [loading, setLoading] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
    let itemsPerPage = 12
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = allProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(allProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allProducts.length;
        setItemOffset(newOffset);
    };
    const getAllProducts = () => {
        setLoading(true)
        fetch(`${API_URL}products`, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((resJson) => {
                setLoading(false)
                setAllProducts(resJson.data)
                console.log(allProducts, "all products")
            })
    }

    useEffect(() => {
        getAllProducts()
    }, []);

    return(
        <>
            <Header />
            <div className="container">
                    {
                        currentItems !== null ? (
                            loading ? <Spinner animation="border" style={{justifySelf: 'center', alignSelf: 'center'}} /> : (
                                <div className="row">
                                    {
                                        currentItems.map((product, index) => {
                                            return <ProductCard key={index} product={product}/>
                                        })
                                    }
                                    <div className="d-flex ms-3 mt-5 me-3 flex-row justify-content-between">
                                        <p className="text-black fw-bolder">Showing results 1 - {pageCount} of {allProducts.length}</p>
                                        <ReactPaginate
                                            breakLabel="..."
                                            nextLabel="next >"
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={5}
                                            pageCount={pageCount}
                                            previousLabel="< previous"
                                            renderOnZeroPageCount={null}
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            previousClassName="page-item"
                                            previousLinkClassName="page-link"
                                            nextClassName="page-item"
                                            nextLinkClassName="page-link"
                                            breakClassName="page-item"
                                            activeClassName="active"
                                            breakLinkClassName="page-link"
                                            containerClassName="pagination"
                                        />
                                    </div>

                                </div>
                            )
                        ) : (
                            <div>
                                <h3 className="mt-5 text-center fw-bold">No Products Found</h3>
                            </div>
                        )

                    }
            </div>
            <Footer/>
        </>
    )
}
