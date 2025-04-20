import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import "./NewArrivals.css";

function NewArrivals() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("#000");
  const [price, setPrice] = useState(350);

  const sizes = [
    "XX Small",
    "X Small",
    "Small",
    "Medium",
    "Large",
    "X Large",
    "XX Large",
  ];
  const colors = [
    "#008000",
    "#FF6347",
    "#FFA500",
    "#FF4500",
    "#1E90FF",
    "#000",
  ];

  // second div ka content
  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      image: "/public/1.png",
    },
    { id: 2, name: "Skinny Fit Jeans", price: "$240", image: "/public/2.png" },
    { id: 3, name: "Checkered Shirt", price: "$180", image: "/public/3.png" },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "$130",
      image: "/public/4.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col-2">
        <div className="w-[250px] p-4 border-r side-bar bg-gray-100">
          {/* Filters Heading */}
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            Filters
          </h2>

          {/* Categories */}
          <div className="mb-4">
            <h3 className="font-semibold">Categories</h3>
            <ul className="text-gray-600 space-y-1">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                (category, index) => (
                  <li key={index} className="cursor-pointer hover:text-black">
                    {category} →
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Range */}
          <div className="my-8">
            <h3 className="font-semibold">Price</h3>
            <input
              type="range"
              min="350"
              max="8000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full accent-blue-500" // Add `accent-blue-500` for blue color
            />
            <p className="text-sm text-gray-600">₹{price}</p>
          </div>

          {/* Colors */}
          <div className="my-8">
            <h3 className="font-semibold">Colors</h3>
            <div className="flex space-x-1 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    selectedColor === color ? "ring-2 ring-gray-800" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="my-8">
            <h3 className="font-semibold">Size</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 text-sm rounded-md ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style (Collapsible Section) */}
          <div className="my-8">
            <h3 className="font-semibold flex justify-between cursor-pointer">
              Dress Style <IoIosArrowDown className="h-5 w-5" />
            </h3>
            <ul className="text-gray-600 space-y-1 mt-2">
              {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
                <li key={index} className="cursor-pointer hover:text-black">
                  {style}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Filter Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Apply Filter
          </button>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="text-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Equal-sized images */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  {/* Product Name */}
                  <h1 className="text-lg font-semibold mt-3">{product.name}</h1>

                  {/* Star Ratings */}
                  <div className="flex justify-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>

                  {/* Price */}
                  <h1 className="text-lg font-semibold mt-2">
                    {product.price}
                  </h1>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
              {products.reverse().map((product) => (
                <div
                  key={product.id}
                  className="text-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Equal-sized images */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  {/* Product Name */}
                  <h1 className="text-lg font-semibold mt-3">{product.name}</h1>

                  {/* Star Ratings */}
                  <div className="flex justify-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>

                  {/* Price */}
                  <h1 className="text-lg font-semibold mt-2">
                    {product.price}
                  </h1>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="text-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Equal-sized images */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  {/* Product Name */}
                  <h1 className="text-lg font-semibold mt-3">{product.name}</h1>

                  {/* Star Ratings */}
                  <div className="flex justify-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>

                  {/* Price */}
                  <h1 className="text-lg font-semibold mt-2">
                    {product.price}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
