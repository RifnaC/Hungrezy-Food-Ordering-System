import React, { useEffect, useState } from "react";
import imageUrl from "../asssets/image/strokeImg.png";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
  const { token } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const [filteredFoods, setFilteredFoods] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);

  const fetchFoodType = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`);
    const data = res.data;
    setFilteredFoods(data);
  };
  useEffect(() => {
    fetchFoodType();
  }, []);
  const result = filteredFoods.map((e) => e.category);
  const categorys = [...new Set(result)];

  const fetchCategoryPro = async (sc) => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/product/category?category=${sc}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = res.data;
    setFilteredFoods(data);
  };

  const row = Math.ceil(filteredFoods.length / 6);
  const pageHandler = (no) => {
    if (no >= 1 && no <= row && no !== page) {
      setPage(no);
    }
    if (no <= 1) {
      setVisible(false);
    }
  };

  return (
    <div id="categories">
      <div
        className="bg-cover bg-right bg-no-repeat py-1 mt-8  text-black font-bold"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "10%",
          marginLeft: 20,
        }}
      >
        <h1 className="mr-22">Food Categories</h1>
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      <div className="flex flex-wrap h-10 items-center justify-around">
        <div
          className="px-2 py-1 mr-2 font-bold text-sm   bg-gray-200 rounded cursor-pointer"
          onClick={fetchFoodType}
        >
          All
        </div>

        {categorys.map((c, i) => (
          <p
            key={i}
            className="px-2 py-1 mr-2 font-bold text-sm   bg-gray-200 rounded cursor-pointer"
            onClick={() => fetchCategoryPro(c)}
          >
            {c}
          </p>
        ))}
      </div>
      <div
        style={{ backgroundColor: "#878787" }}
        className="w-full h-0.5"
      ></div>
      {/* <div className="flex flex-wrap h-10 items-center justify-around pt-4">
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Cakes
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Cupcakes
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Pastry
        </span>
        <span className="px-2 py-1 mr-2 font-bold text-sm rounded-full  bg-slate-300 hover:bg-neutral-500 cursor-pointer">
          Ice creams
        </span>
      </div> */}

      <div className="flex justify-between flex-wrap w-full pt-8 pb-10 ">
        {filteredFoods.length !== 0 ? (
          filteredFoods.slice(page * 6 - 6, page * 6).map((f) => (
            <div
              key={f._id}
              className="p-4 w-60 h-60 m-4 bg-blue-300 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
            >
              console.log(f);
              <div className="flex flex-wrap justify-around ">
                <div className="flex  justify-between ">
                  <AiOutlineHeart className=" pl-2 w-10 h-10" />
                  <span>
                    <AiTwotoneStar fill="#FAD26B" className="pl-2 w-9 h-9" />{" "}
                    5.4{" "}
                  </span>
                </div>
                <Link to={`/food/${f._id}`}>
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/images/${f?.img}`}
                    alt="food"
                    className="w-28 h-28 rounded-3xl"
                  />{" "}
                </Link>
              </div>
              <Link to={`/food/${f._id}`}>
                <h1 className="text-center font-bold text-xl">{f?.title}</h1>
              </Link>
              <div className="flex justify-around mt-2">
                <span>₹ {f?.price}</span>
              </div>
            </div>
          ))
        ) : (
          <h1 className=""> Product not found</h1>
        )}
      </div>
      {visible ? (
        <div className="flex justify-center items-center mb-8">
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded-full tracking-widest w-48 h-12"
            }
            onClick={() => pageHandler(page - 1)}
          >
            prev
          </button>
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded-full tracking-widest w-48 h-12"
            }
            onClick={() => pageHandler(page + 1)}
          >
            next
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center mb-8">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded-full tracking-widest w-48 h-12"
            onClick={() => {
              pageHandler(page + 1);
              setVisible(true);
            }}
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
}

export default Categories;
