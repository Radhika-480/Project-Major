import React, { useState } from "react";

const AddCard = () => {
  const [count, setCount] = useState(0);

  const product = [
    {
      image: "../../public/8.png.png", // Corrected path
      name: "Gradient Graphic T-shirt",
      size: "Small, Medium, Large",
      color: "red, black, blue",
      price: "$145",
    },
    {
      image: "../../public/8.png.png",
      name: "Gradient Graphic T-shirt",
      size: "Small, Medium, Large",
      color: "red, black, blue",
      price: "$145",
    },
    {
      image: "../../public/8.png.png",
      name: "Gradient Graphic T-shirt",
      size: "Small, Medium, Large",
      color: "red, black, blue",
      price: "$145",
    },
  ];

  return (
    <>
      <div className="flex justify-center gap-6 border-s-violet-100    w-full">
        <div>
          <div className="text-2xl font-extrabold flex ml-10">YOUR CART</div>
          {product.map((item, index) => (
            <div
              className="flex gap-5 mt-4 shadow-xl border  rounded-lg ml-8 "
              key={index}
            >
              <div className="bg-slate-100 size-32">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="size-55">
                <p className="font-bold text-2xl py-2">Name: {item.name}</p>
                <p className="font-sans text-1.8xl py-1">Size: {item.size}</p>
                <p className="font-sans text-1.5xl py-1">Color: {item.color}</p>
                <p className="font-sans text-1.5 py-1">Price: {item.price}</p>
              </div>
              {/* Counter */}
              <div className="flex w-36 pl-3 rounded-3xl mt-20 items-center space-x-4">
                <button
                  className="px-4 py-2 text-black rounded-lg text-3xl shadow-lg"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <span className="text-xl font-semibold">{count}</span>
                <button
                  className="px-4 py-2 text-black text-3xl rounded-lg shadow-lg"
                  onClick={() => setCount(Math.max(0, count - 1))}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* side div */}
        <div className=" mt-12 font-serif border px-4 shadow-xl rounded-lg  w-80  flex-col gap-10   ">
          <div className="text-2xl py-4 ">
            <h1 className="font-bold">Order Summary</h1>
          </div>
          <div className="font-sans py-3 text-2xl flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <h1>$565</h1>
          </div>
          <div className="font-sans py-3 text-2xl flex justify-between">
            <p className="text-gray-400"> Discount (-20%)</p>
            <h1 className="text-red-600">-$113</h1>
          </div>
          <div className="font-sans py-3 text-2xl flex justify-between">
            {" "}
            <p className="text-gray-400">Delivery Fee</p>
            <h1>$15</h1>
          </div>
          <div className="font-sans py-3 text-2xl flex justify-between">
            {" "}
            <p className="font-bold">Total</p>
            <h1>$467</h1>
          </div>
          <input
            className="border p-2 border-gray-500 rounded-lg"
            type="text"
            placeholder="Enter your coupon code "
          />
          <button className="bg-black p-2 rounded-3xl text-white px-6">
            Apply
          </button>
          <button className= "bg-black p-2 rounded-3xl text-white px-20 ml-2 my-6 ">Go to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
