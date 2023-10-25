import * as ActionTypes from "../actionTypes"
import axios from "axios";

import { getUserCart } from "../Cart/CartAction";
import { getRecentOrders } from "../RecentOrders/RecentOrdersAction";

export const AddUserToStore = (newUser)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}

export const saveUserToDB = (user) => {
    console.log("Saving User to DB: ", user)
    return(dispatch) => {
        axios.post("http://localhost:9000/user/api/signup", user)
        .then((response) => {
            console.log("Successfully signed up new user: ", response.data)
            dispatch(AddUserToStore(response.data))
        })
        .catch((error) => {
            console.log("Error while trying to add user: ", error)
        })
    }
}

export const LoginUser = (user) => {
    console.log("Attempting to Login User: ", user)
    return(dispatch) => {
        axios.post("http://localhost:9000/user/api/signin", user)
        .then((response) => {
            if(response.status === 200){
                console.log("Successfully signed in")
                let signedUser = response.data;
                dispatch(AddUserToStore(response.data))
                dispatch(getUserCart(signedUser._id))
                // dispatch(getRecentOrders(signedUser._id))
            } else {
                console.log("Invalid Response Status")
            }
        })
        .catch((error) => {
            console.log("Error while trying to sign in: ", error)
        })
    }
}