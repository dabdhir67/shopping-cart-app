import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cart from '../Cart/Cart';
import { saveRecentOrderToDB } from '../../../state/RecentOrders/RecentOrdersAction';

function Checkout() {
  // Retrieve user details and cart data from the Redux store
  const user = useSelector((state) => state.userReducer.User);
  const cartList = useSelector((state) => state.cartReducer)
  // Create state to manage the visibility of the "Make Payment" message
  const [showMakePaymentMessage, setShowMakePaymentMessage] = useState(false);

  let dispatch = useDispatch();

  // Function to handle the payment
  const handlePayment = (cart, userid) => {
    // Hide everything and show the "Make Payment" message
    setShowMakePaymentMessage(true);

    dispatch(saveRecentOrderToDB(cart, userid));
  };  

  return (
    <div>
        {showMakePaymentMessage ? (
        <div>
          <h1>Payment Page</h1>
          <p>Thank you for your payment, your items are under process!</p>
        </div>
      ) : (
        <div>
          <h1>Checkout</h1>
          <div>
            <h2>User Details</h2>
            <p>Name: {user.userName}</p>
            <p>Address: {user.street}</p>
          </div>
          <div>
            <Cart readOnly={true} />
          </div>
          <button onClick={() => handlePayment(cartList, user._id)}>Make Payment</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
