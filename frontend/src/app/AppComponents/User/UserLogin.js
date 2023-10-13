import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../state/User/UserAction";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    let dispatch = useDispatch();

    let handleFormSubmit = (evt) => {
        let user = {userName, passWord};
        dispatch(LoginUser(user))
        evt.preventDefault();
    }

    return(
        <>
            <h1>Log In</h1>
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
            <input type="submit" className={"btn btn-primary"} value="Log In"/>
            </form>
        </>
    )
}

export default Login;