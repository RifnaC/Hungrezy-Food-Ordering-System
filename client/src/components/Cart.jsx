import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartSlice";

function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="h-auto w-full  bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="mx-auto w-85 flex gap-1">
        <div className="flex-3 flex flex-col">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="relative flex gap-1 mb-20">
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className="absolute left-96 top-1/4 text-2xl cursor-pointer border border-gray-700 rounded-full flex items-center justify-center p-1"
                >
                  X
                </div>
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.img}`}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl text-gray-800 capitalize">
                    {product.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="text-xl">{product.quantity} x </span>
                    <span className="text-red-500 text-xl">
                      <span>₹ </span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className=" flex justify-center text-center mt-6 mb-8 text-3xl font-bold text-gray-700">
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        {products.length > 0 && (
          <div className=" ml-96 mb-16 flex-1 flex flex-col  justify-center items-center p-4 h-52 w-52 rounded-xl bg-gradient-to-r from-rose-200 to-teal-200">
            <div className="text-3xl font-semibold mb-4">
              Total products: {products.length}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl">Subtotal: ₹ {totalPrice}</span>
              <span
                onClick={handleOrder}
                disabled={products.length === 0}
                className={`mt-2 px-4 py-2 text-white rounded-md cursor-pointer ₹{
                products.length === 0
                  ? "bg-gray-500"
                  : " bg-gray-300 hover:bg-gray-500 hover:text-black hover:border-gray-700 border-2 border-transparent"
              } transition-all duration-300 ease-in-out`}
              >
                Order now
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
