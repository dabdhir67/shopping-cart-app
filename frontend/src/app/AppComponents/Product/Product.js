import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayProducts from "./DisplayProducts";

import { saveProduct } from "../../../state/product/ProductAction";

function Product() {

    let user = useSelector((state) => state.userReducer.User)

    //creating states for product component by using default value
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [desc, setDescription] = useState("");
    let [rating, setRating] = useState("");

    let onTextChange = (evt)=>{
        let classs = evt.target.classList;
        if (classs.contains("name")) {
            setName(evt.target.value)
        }

        evt.preventDefault();
    }

    let dispatchToSave = useDispatch();

    let saveProductClick = (evt)=>{
        let productToBeSaved = {name, price, desc, rating} ;//this makes a product object

        alert("Save Product will be implemented here!! "+ JSON.stringify(productToBeSaved));
        
        dispatchToSave(saveProduct(productToBeSaved)) //action gets dispatched to store (reducer)
        setName("");
        setPrice("");
        setDescription("");
        setRating("");
        evt.preventDefault();
    }

    return(
        <>{
            user.userName === "admin" ?
            <>
            <h1>Add a Product</h1>

            <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    <input type="text" className="form-control col-md-6 name" value={name} maxLength={25}
                        placeholder="Product Name"
                        onChange={onTextChange}
                    />
                </div>
                <div className="col-md-12">
                    <b>Price </b>
                    <input type="number" className="form-control col-md-6" value={price} 
                      placeholder="Product Price"
                      onChange={(evt)=>setPrice(evt.target.value)} />
                </div>
                
                <div className="col-md-12">
                    <b>Description </b>
                <input type="text" className="form-control col-md-6" value={desc} 
                      placeholder="Please Describe the Product"
                      onChange={(evt)=>setDescription(evt.target.value)} />
                </div>
                
                <div className="col-md-12">
                    <b>Ratings </b>
                <input type="text" className="form-control col-md-6" value={rating} 
                      placeholder="Ratings"
                      onChange={(evt)=>setRating(evt.target.value)} />
                </div>

                <input type="button" className={"form-control btn btn-primary col-md-3"} 
                    value={"Save Product"} 
                    onClick={saveProductClick}/>
            </div>
            </section>
        </> : ""
        }

        <hr/>
        <DisplayProducts />
        </>
    )
}

export default Product;