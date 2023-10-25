import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "./CommonComponents/Header";
import Home from "./CommonComponents/Home";
import About from "./CommonComponents/About";
import Footer from "./CommonComponents/Footer";

import SignUp from "./AppComponents/User/UserSignUp";
import Login from "./AppComponents/User/UserLogin";

import Product from "./AppComponents/Product/Product";
import Cart from "./AppComponents/Cart/Cart";
import Checkout from "./AppComponents/Checkout/Checkout";
import Coupon from "./AppComponents/Coupon/Coupon";
import RecentOrders from "./AppComponents/RecentOrders/RecentOrders";


export default class App extends Component {

    render(){
        return(
            <Router>
                <Suspense fallback={<h1 className="text-danger">Loading....</h1>}>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/signUp" element={<SignUp/>} />
                        <Route path="/about" element = {<About/>} />
                        <Route path="/login" element = {<Login/>} />
                        <Route path="/product" element = {<Product/>} />
                        <Route path="/cart" element = {<Cart/>} />
                        <Route path="/checkout" element = {<Checkout/>} />
                        <Route path="/coupon" element = {<Coupon/>} />
                        <Route path="/recentorders" element = {<RecentOrders/>} />
                    </Routes>
                <Footer/>
                </Suspense>
            </Router>
        )
    }
}