import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartItem } from "../redux/cartSlice";

function Checkout() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClear = () => {
    dispatch(clearCartItem());
    navigate("/");
  };

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-1/2 w-1/2 flex flex-col items-center gap-6">
        <h2 className="font-bold text-3xl whitespace-nowrap">
          Your order is successful
        </h2>
        <span className="text-xl text-gray-600">
          Total Price:<span className="font-bold"> ₹ {totalPrice}</span>
        </span>
        <span
          onClick={handleClear}
          className=" rounded-xl cursor-pointer p-2 font-bold bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500 border-2 border-transparent"
        >
          Go to Home
        </span>
      </div>
    </div>
  );
}

export default Checkout;
