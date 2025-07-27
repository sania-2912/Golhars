import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // ✅ fixed
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const handleQuantityChange = (item, newQty) => {
    if (newQty < 1) return;

    if (newQty > item.quantity) {
      dispatch(increaseQuantity({ _id: item._id, size: item.size }));
    } else {
      dispatch(decreaseQuantity({ _id: item._id, size: item.size }));
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={`${item._id}-${item.size}`}
              item={item}
              onUpdateQty={handleQuantityChange}
              onRemove={() => dispatch(removeFromCart({ _id: item._id, size: item.size }))}
            />
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total.toLocaleString()}</h3>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
