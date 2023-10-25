import * as actionTypes from "../actionTypes";

export const AddCouponToStore = (coupon) =>{
    return {
        type: actionTypes.SET_COUPON,
        payload: coupon
    }
}