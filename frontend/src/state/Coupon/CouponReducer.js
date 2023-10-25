import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = {
    Coupon: {   
        code: "",
        discount: 0
    }
}

export default function CouponReducer(state = INITIAL_STATE, action)
{
    switch(action.type){

        case ActionTypes.SET_COUPON :
            return {...state, Coupon : action.payload}

        default:
            return state
    }

}
