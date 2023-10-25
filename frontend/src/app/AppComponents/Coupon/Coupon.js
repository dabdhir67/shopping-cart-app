import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCouponToStore } from '../../../state/Coupon/CouponAction';

function Coupon() {
  // Retrieve the coupon value from the Redux store using useSelector
  const coupon = useSelector((state) => state.couponReducer.Coupon);

  const [showCoupon, setShowCoupon] = useState(false);

  const dispatch = useDispatch();

  const generateCoupon = () => {
    // Define possible characters for the coupon code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    // Generate a random alphanumeric coupon of a specified length (e.g., 6 characters)
    let generatedCoupon = '';
    const couponLength = 6;
    for (let i = 0; i < couponLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedCoupon += characters.charAt(randomIndex);
    }
  
    // Generate a random discount value between 5% and 50%
    const randomDiscount = (Math.random() * (0.5 - 0.05) + 0.05).toFixed(2);
  
    // Create an object to store both the coupon and discount
    const couponData = {
        code: generatedCoupon, // Call the function to get the code
        discount: randomDiscount
    };
  
    // Dispatch the coupon data to the Redux store
    dispatch(AddCouponToStore(couponData));
    setShowCoupon(true);
  };
  


  return (
    <div>
      <h1>Coupon Page</h1>
      <button onClick={generateCoupon}>Generate Coupon</button>

    {
        showCoupon ?
        <Fragment>
        <p>Coupon: {coupon.code} {coupon.discount}</p>
        <p>Discount: {(coupon.discount * 100).toFixed(2)}%</p>
        </Fragment>
        :
        <h5>Click the button to generate a coupon.</h5>
    }

    </div>
  );
}

export default Coupon;
