import React from "react";
import { useSelector } from "react-redux";

const CartSummary = (props) => {
  const { count, amount } = props.data;
  const coupon = useSelector((state) => state.couponReducer.Coupon);

   // Calculate the applied amount after applying the coupon
   const appliedAmount = coupon ? amount - amount * coupon.discount : amount;

   // Calculate the saved amount
   const savedAmount = coupon ? amount * coupon.discount : 0;

  return (
    <div>
      <h2>Purchase Summary</h2>
      <p>Total Amount: ${appliedAmount}</p>
      <p>Total Quantity: {count}</p>
      {coupon && coupon.code ? (
        <>
        <p>Coupon Code: {coupon.code} - {(coupon.discount * 100).toFixed(2)}%</p>
        <p>Amount saved: {(savedAmount.toFixed(2))}</p>
        </>
      ) : (
        <p>No coupon applied. Get a coupon for discounts!</p>
      )}
    </div>
  );
};

export default CartSummary;
