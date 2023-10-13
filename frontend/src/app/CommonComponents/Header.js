import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = (props) => {

    let user = useSelector((store)=>store.userReducer.User);

    return(
        <>
             {user && user.userName ? (
                <span class="fs-4">
                Welcome <b>{user.userName}</b> to Synergistic IT Shopping Cart!
                </span>
            ) : (
                <b>Please Login to see other features</b>
            )}


            <div>
                <NavLink to="/" className="button" activeclassname="success" >Home </NavLink>
                <NavLink to="/signUp" className="button" activeclassname="success" >User</NavLink>
                <NavLink to="/products" className="button" activeclassname="success" >Products</NavLink>
                <NavLink to="/about" className="button" activeclassname="success" >About</NavLink>

            </div>
        </>
    )
}

export default Header;

