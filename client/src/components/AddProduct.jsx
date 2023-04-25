import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleCloseImg = () => {
    setImage("");
  };
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      let filename = null;
      console.log("hdhd")

      if (image) {
        filename = Date.now() + image.name;
        formData.append("filename", filename);
        formData.append("image", image);
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/upload/image`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      console.log("ddddddddddd")

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/product`,
      { title, desc, category, img: filename, price, review},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("dddshsjjs")

      const data = res.data;
      navigate(`/food/${data._id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center pb-20 mt-14">
      <div className="flex flex-col border-1 border-gray-600 rounded-lg p-6">
        <h2 className="text-center text-xl font-bold mb-8">Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Title: </label>
            <input
              type="text"
              placeholder="Title..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Ingredients: </label>
            <textarea
              type="text"
              placeholder="Ingrendients..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Instruction: </label>
            <input
              type="text"
              placeholder="Instruction..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end mb-4">
            <label htmlFor="image" className="w-full">
              Image:{" "}
              <span className=" ml-16 inline-block py-2 px-4 bg-teal-500 text-white rounded-lg cursor-pointer transition-all duration-150 border border-transparent hover:bg-white hover:text-teal-500 hover:border-teal-500 mr-4">
                Upload here
              </span>
            </label>
            <input
              type="file"
              id="image"
              placeholder="Image..."
              className="w-3/4 border rounded-md p-2"
              onChange={onChangeFile}
              style={{ display: "none" }}
            />
            {image && (
              <p className="text-sm  flex items-center gap-2">
                {image.name}{" "}
                <span
                  onClick={handleCloseImg}
                  className="mr-16 text-lg cursor-pointer"
                >
                  X
                </span>
              </p>
            )}
          </div>
          <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        
          {/* <div className="flex items-center justify-end mb-4">
            <label className="w-1/3">Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder="Review..."
              className="w-3/4 border rounded-md p-2"
              onChange={(e) => setReview(e.target.value)}
            />
          </div> */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-1/2 bg-gray-400 text-black py-2 px-4 rounded-md border border-transparent cursor-pointer transition-all duration-150 hover:bg-gray hover:border-gray-600 mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
