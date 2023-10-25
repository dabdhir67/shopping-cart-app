import React, { useState, Fragment } from "react";
import { useDispatch} from "react-redux";
import { removeItem, updateItem } from "../../../state/Cart/CartAction";

function CartItem(props) {

    const item = props.item;

    const [Quantity, setQuantity] = useState(item.qty);

    let dispatch = useDispatch();

    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.rating}</td>
                <td>
                {
                    props.readOnly ? Quantity :
                    <input type="number" value = {Quantity} onChange={(evt) => {setQuantity(evt.target.value)}} />
                }
                </td>
                <td>
                    {item.qty*item.price}
                </td>
                {
                props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button onClick={()=>dispatch(removeItem(item._id))}>Remove</button> </td>
                        <td><button onClick={()=>dispatch(updateItem(item._id, Quantity))}>Edit</button></td>
                    </Fragment>
                }
            </tr>
        </>
    )
}

export default CartItem;