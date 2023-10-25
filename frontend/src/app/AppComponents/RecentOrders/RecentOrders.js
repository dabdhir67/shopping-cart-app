import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentOrders } from '../../../state/RecentOrders/RecentOrdersAction';
import RecentOrderProducts from './RecentOrderProducts';

function RecentOrders() {
  // Retrieve the user's information from the Redux store or any other source
  const user = useSelector((state) => state.userReducer.User);
  const recentOrders = useSelector((state) => state.recentOrdersReducer);

  let dispatch = useDispatch();

  // Fetch recent orders when the component mounts
  useEffect(() => {
    dispatch(getRecentOrders(user._id));
  }, []); // Fetch orders whenever the user changes

  function calculateTotalAmount(orderItems) {
    return orderItems.reduce((total, item) => {
      return total + item.qty * item.price;
    }, 0);
  }

  return (
    <div className="container mt-4">
      <h1>Recent Orders</h1>

      {recentOrders && recentOrders.length >= 1 ? (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Order</th>
              <th>Total Amount</th>
              <th>Date</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  <ul className="list-unstyled">
                    {order.order.map((product) => (
                      <li key={product._id}>
                        <RecentOrderProducts product={product} />
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{calculateTotalAmount(order.order)}</td>
                <td>{order.dateTime}</td>
                <td>
                  <button
                    onClick={() => dispatch(cancelOrder(order._id))}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You have not made any orders recently. Please go to checkout!</p>
      )}
    </div>
  );
}

export default RecentOrders;
