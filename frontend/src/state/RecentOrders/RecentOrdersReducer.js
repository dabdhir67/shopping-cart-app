import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []

export default function RecentOrdersReducer(state = INITIAL_STATE, action){

    console.log("recent order reducer", state, action)

    switch(action.type){
        case ActionTypes.ADD_RECENT_ORDERS:
            return action.payload

        default:
        return state;
    }
}