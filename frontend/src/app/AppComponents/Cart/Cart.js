import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../../state/Cart/CartAction";

function Cart(props) {

    const cartList = useSelector((store) => store.cartReducer);
    const user = useSelector((store) => store.userReducer.User);

    let dispatch = useDispatch();

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!!!")
        }else{
            alert("Cart successfully saved")
            dispatch(saveCartToDb(cart, userId))
        }
    }

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }
    
    let navigate = useNavigate();
    
    let func = (evt) => {
        navigate("/checkout");
        evt.preventDefault();
    }

    return(
        <>
            <h1>Cart: </h1>

            {
                cartList && cartList.length >=1 ?
                <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            {
                                props.readOnly ? "" :
                                <Fragment>
                                    <th>Remove</th>
                                    <th>Edit</th>
                                </Fragment>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(item => {
                                return <CartItem item={item} readOnly={props.readOnly} key={item._id}/>
                            })
                        }
                    </tbody>
                </table>
                <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />
                {
                    props.readOnly ? <></> :
                    <Fragment>
                    <button onClick={() => clickToSaveCart(cartList, user._id)} >
                            Save Cart
                    </button>
                    
                    <button onClick={func} >
                        Go To Checkout
                    </button>
                </Fragment>        
                }
                     
                </>
               :
               <h2>Please add products to your cart...</h2>
            }        
        </>
    )
}

export default Cart;