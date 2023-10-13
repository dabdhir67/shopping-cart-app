import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserToDB } from "../../../state/User/UserAction";
import { NavLink } from "react-router-dom";

function SignUp(){

    let [userName, setUserName] = useState("");
    let [passWord, setPassWord] = useState("");
    let [street, setStreet] = useState("");
    let [mobile, setMobile] = useState(0);

    let dispatch = useDispatch()
     
    let handleFormSubmit = (evt) => {
        let user = {userName, passWord, street, mobile};
        alert(JSON.stringify(user))
        dispatch(saveUserToDB(user))
        evt.preventDefault()
    }
    return(
        <>  
            <h1>Sign Up</h1>
            <form className={"form col-md-10"} onSubmit={handleFormSubmit}>                
            <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} value={userName} 
                        onChange={(evt)=>{setUserName(evt.target.value)}}
                        placeholder="Please enter user name" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} value={passWord} 
                        onChange={(evt)=>{setPassWord(evt.target.value)}}
                        placeholder="Please enter password" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Street Address :</b>
                    <input type="text" className={"form-control col-md-12"} value={street} 
                        onChange={(evt)=>{setStreet(evt.target.value)}}
                        placeholder="Please enter street address" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Mobile :</b>
                    <input type="tel" className={"form-control col-md-12"} value={mobile} 
                        onChange={(evt)=>{setMobile(evt.target.value)}}
                        placeholder="Please enter mobile number" maxLength={20} required/>
            </label>
            <br/>
            <p><b>Already have an account? <NavLink to="/login" className="button" activeclassname="success" >Log In </NavLink></b> </p>
            <input type="submit" className={"btn btn-primary"} value="Create Account"/>
            </form>
        </>
    )
}

export default SignUp;