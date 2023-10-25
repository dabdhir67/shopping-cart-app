import React from "react";

function RecentOrderProducts(props){

    const product = props.product;



    return(
        <>
            <tr>
                <td>{product.qty}x {product.name} - ${product.price*product.qty}</td>
            </tr>           
        </>
    )

}

export default RecentOrderProducts;