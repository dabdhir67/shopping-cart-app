import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import userReducer from "./User/UserReducer";
import productReducer from "./product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
import couponReducer from "./Coupon/CouponReducer";
import recentOrdersReducer from "./RecentOrders/RecentOrdersReducer"

const rootReducer = combineReducers({
    userReducer,
    productReducer,
    cartReducer,
    couponReducer,
    recentOrdersReducer
})

export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(thunk)
)