import React, { useEffect, useState } from "react";
import imageUrl from "../asssets/image/strokeImg.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

function FoodRecipies() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [singlePro, setSinglePro] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchFoodType = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/product/find/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setSinglePro(data);
    };
    fetchFoodType();
  }, [id]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };
  const addToCart = () => {
    dispatch(addProduct({ ...singlePro, quantity }));
  };

  return (
    <div className="h-auto bg-gradient-to-r from-rose-100 to-teal-100">
      <div
        id="Recipies"
        className="bg-cover bg-right bg-no-repeat py-1 text-black font-bold"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "10%",
          marginLeft: 20,
        }}
      >
        <h1 className="mr-22">Food Recipes</h1>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <div className="px-2 py-1 mr-2 font-bold text-sm   bg-gray-200 rounded">
          All
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Break fast
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Lunch
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Dinner
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Dessert
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Beverages
        </div>
        <div className="px-2 py-1 mr-2 font-bold text-sm bg-gray-200 rounded">
          Bakes
        </div>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Cakes
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Cupcakes
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Pastry
        </span>
        <span
          style={{ backgroundColor: "#D9D9D9" }}
          className="px-2 py-1 mr-2 font-bold text-sm rounded-full"
        >
          Ice creams
        </span>
      </div>
      <div className="flex">
        <div className="w-1/3 p-4">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/images/${singlePro?.img}`}
            alt={singlePro?.title}
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex flex-col h-full">
            <h1 className="font-bold">{singlePro?.title}</h1>
            <div className="flex flex-col h-500 justify-start p-2">
              <span>
                Category: <span>{singlePro?.category}</span>
              </span>
              <span>
                Price: <strong> ₹ {singlePro?.price}</strong>
              </span>
              <span>
                Review:{" "}
                <strong>
                  {" "}
                  {singlePro?.review}{" "}
                  <span style={{ color: "red", fontSize: "20px" }}>*</span>
                </strong>
              </span>
            </div>
            <h1 className="font-bold">Description:</h1>
            <div className="flex h-500 justify-start p-2">
              <ul className="list-disc flex p-4 m-2 flex-wrap justify-between">
                <li className="py-2">{singlePro?.desc}</li>
              </ul>
            </div>
            <h1 className="font-bold">Incgrediance</h1>
            <div className="flex-1">
              <ul className="list-disc flex p-4 m-2 flex-wrap justify-between">
                <li className="py-2">List item 3</li>
                <li className="py-2">
                  List item gfdsgdsgsdgsgdfgdsfdsggsdsgsdgdsgsdgsdggdsg4
                </li>
                <li className="py-2">List item 4</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <button
                  disabled={quantity === 1}
                  onClick={() => changeQuantity("dec")}
                  className="px-4 py-2 border cursor-pointer text-lg hover:bg-gray-300 focus:outline-none disabled:bg-blue-500 disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="px-4 py-2 border cursor-default text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => changeQuantity("inc")}
                  className="px-4 py-2 border cursor-pointer text-lg hover:bg-gray-300 focus:outline-none"
                >
                  +
                </button>
                <button
                  onClick={addToCart}
                  className="outline-none border-1 border-transparent py-2 px-4 ml-8 bg-blue-500 text-white rounded-2xl text-lg flex items-center gap-2 cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:bg-white"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodRecipies;
