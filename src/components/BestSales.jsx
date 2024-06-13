import React from "react";
import products from "../../products.json";
import ProductCard from "./ProductCard.jsx";


export default function BestSales(){
    return(
        <>
            <div className="row">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard key={index} product={product}/>
                        )
                    })
                }
            </div>
        </>
    )
}
