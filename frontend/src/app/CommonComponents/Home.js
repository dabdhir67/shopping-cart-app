import React, { Component } from "react";

export default class Home extends Component {

    render(){
    return(
    <div className={"loadimage form"} >
        <h1>Synergistic IT Shopping Cart</h1>
        <b className="feature">{"Product Feature's :"}</b>
        <ul>                     
            <li>Sign up new users</li>
            <li>Login existing users.</li>                
            <li>Allow user's to add to cart.</li>
            <li>Save the user's cart.</li>
            <li>Checkout and pay for items.</li>
            <li>Allow users to cancel the order.</li>
            <li>Allow users to reorder the cart.</li>
            <li>Add products/items to create product collection.</li>
            <li>Allow users to give ratings to each product.</li>
            <li>Have notifications on top right with logout.</li>
        </ul>
    </div>
        )
    }
}