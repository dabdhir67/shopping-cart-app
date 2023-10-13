import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./CommonComponents/Header";
import Home from "./CommonComponents/Home";
import About from "./CommonComponents/About";
import Footer from "./CommonComponents/Footer";

import SignUp from "./AppComponents/User/UserSignUp";
import Login from "./AppComponents/User/UserLogin";


import "./app.css";

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
                    </Routes>
                <Footer/>
                </Suspense>
            </Router>
        )
    }
}