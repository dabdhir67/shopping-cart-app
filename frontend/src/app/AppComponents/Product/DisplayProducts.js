import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../state/product/ProductAction";
import ProductDetails from "./ProductDetails"

const DisplayProducts = (props)=>{

    let products = useSelector((store)=>store.productReducer.products);

    let dispatchToFetchProducts = useDispatch();

    useEffect(()=>{
        dispatchToFetchProducts(fetchProducts());
    },
    []) //executes for one time and then initializes products with [] //componentDidMount

    return(
        <>
            {
                products && products.length >= 1 ? 
                    products.map((product)=>{
                        return <ProductDetails product={product} key={product._id}/>
                    })

                :<h2>No Products To Show</h2>
            }
        </>
    )
}

export default DisplayProducts;