import * as actionTypes from "../actionTypes";

export const AddRecentOrdersToStore = (recentorder) => {
    return {
        type: actionTypes.ADD_RECENT_ORDERS,
        payload: recentorder
    }
}

export const saveRecentOrderToDB = (order, userid) => {
    return function(dispatch){
        window.fetch("http://localhost:9000/recentorders/api/saveRecentOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({userid:userid, order:order})})
        .then(response => response.json())
        .then(response => {
            console.log("Successfully saved recent order: ", response)
            dispatch(AddRecentOrdersToStore(response))
        })
        .catch((err) => {
            console.log("Error saving recent order: ", err)
        })
    }
}

export const getRecentOrders = (userid) => {
    return function(dispatch) {
    window.fetch("http://localhost:9000/recentorders/api/getrecentorders",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:userid})
    })
    .then (response => response.json())
    .then (response => {
        console.log(response[0])

        // for (const order of response){
        //     let action = AddRecentOrdersToStore(order.order);
        //     console.log(order.order) 
        //     dispatch(action);
        // }
        let action = AddRecentOrdersToStore(response);
        dispatch(action);


    })
    .catch((err) => {
        console.log("Error getting recent orders: ", err)
    })
    }
}   