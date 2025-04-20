import React, { useCallback } from "react";
import img1 from "../../public/shopPage.png/T.png";
import img3 from "../../public/shopPage.png/T3.png";
import img2 from "../../public/shopPage.png/T2.png";
import img4 from "../../public/shopPage.png/T1.png";

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { IoIosArrowDown , IoIosArrowUp  } from "react-icons/io";
import { Link } from "lucide-react";



function ShopPage() {
  // quantity counter
  const [count, setCount] = useState(0);

  // size ke liye
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // product details or reviews ke liye
  const productData = {
    description: [
      { label: "Category", value: "Black T-shirt for men" },
      { label: "Style", value: "Solid" },
      { label: "Length", value: "Regular length" },
      { label: "Collar", value: "Polo collar" },
      { label: "Sleeves", value: "Short, regular sleeves" },
      { label: "Fabric", value: "Woven cotton fabric" },
      { label: "Closure", value: "Button closure" },
      { label: "Size & Fit", value: "Regular Fit" },
      { label: "Model Info", value: "The model (height 6') is wearing a size M" },
      { label: "Material & Care", value: "60% Cotton, 40% Polyester" },
      { label: "Washing", value: "Machine Wash" },
    ],
    reviews: [
      {
        name: "Aman Sharma",
        rating: "⭐⭐⭐⭐",
        message: "Great product, loved it!",
      },
      {
        name: "Riya Verma",
        rating: "⭐⭐⭐⭐⭐",
        message: "Amazing quality and fast delivery.",
      },
      {
        name: "Rahul Yadav",
        rating: "⭐⭐⭐",
        message: "Good, but expected better packaging.",
      },
      {
        name: "Priya Singh",
        rating: "⭐⭐⭐⭐",
        message: "Nice product, fits well!",
      },
      {
        name: "Vikas Mehta",
        rating: "⭐⭐⭐⭐⭐",
        message: "Excellent! Worth the price.",
      },
      {
        name: "Vikas Mehta",
        rating: "⭐⭐⭐⭐⭐",
        message: "Excellent! Worth the price.",
      },
    ],
  };

  // for FnQs
  const faqsData = [
    {
      question: "What is your return policy?",
      answer: "You can return the product within 30 days of purchase.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with additional shipping charges.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number sent to your email.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and other major payment methods.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center  gap-4">
          {/* Small Images Container */}
          <div className="flex flex-col md:flex-col gap-2">
            <img
              src={img1}
              alt=""
              className="w-full md:w-auto h-auto object-cover rounded-lg"
            />
            <img
              src={img3}
              alt=""
              className="w-full md:w-auto h-auto object-cover rounded-lg"
            />
            <img
              src={img2}
              alt=""
              className="w-full md:w-auto h-auto object-cover rounded-lg"
            />
          </div>

          {/* Large Image (Remains Same on Large Screens) */}
          <div className="w-full md:w-auto">
            <img
              src={img4}
              alt=""
              className="w-full md:w-auto h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        {/* images are end here left section */}
        <div className="">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            One Life Graphic T-shirt
          </h1>
          <div className="py-2">⭐⭐⭐⭐⭐ 4.5/5</div>
          <div className="flex gap-5 py-2 text-2xl">
            <h1>$260</h1>
            <h1 className="text-gray-500">$300</h1>
            <h1 className="text-red-600 text-sm mt-2">-40%</h1>
          </div>
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and <br /> breathable fabric, it offers superior comfort and
            style.
          </p>
          {/* size buttons */}
          <div style={{ marginTop: "20px" }}>
            <h2 className="mb-3">Choose Size</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              {sizes.map((size) => (
               <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    border: "1px solid gray",
                    backgroundColor:
                      selectedSize === size ? "black" : "#f0f0f0",
                    color: selectedSize === size ? "white" : "black",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  {size}
                </button>
              
              ))}
            </div>
            {/* quantity counter is here */}
            <div className="flex w-36 rounded-3xl mt-6 items-center space-x-4 shadow-xl shadow-gray-300 ">
              <button
                className="px-4 py-2 text-black rounded-lg text-3xl  shadow-lg "
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <span className="text-xl font-semibold ">{count}</span>{" "}
              {/* Yahan count dikhayega */}
              <button
                className="px-4 py-2 text-black text-3xl rounded-lg shadow-lg "
                onClick={() => setCount(Math.max(0, count - 1))}
              >
                -
              </button>
            </div>

            <button className="bg-black text-white rounded-2xl mt-8 py-2 px-28">
              add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* first container end here */}

      {/* reviews and product details */}
      <div style={{ padding: "20px", maxWidth: "900px", margin: "auto",  }} >
        <Tabs>
          <TabList
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              border: "none",
            }}
          >
            <Tab style={{ border: "none" , fontSize:"20px",  }}>Description</Tab>
            <Tab style={{ border: "none",fontSize:"20px" }}>
              Reviews ({productData.reviews.length})
            </Tab>
            <Tab style={{ border: "none",fontSize:"20px" }}>FANQs</Tab>
          </TabList>

          {/* Description Panel */}
          <TabPanel>
          <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Product Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {productData.description.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 font-semibold border-r">{item.label}</td>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </TabPanel>

          {/* Reviews Panel */}
          <TabPanel>
            <h2 className="pl-4">All Reviews</h2>
            <div className="reviews-container bg-white shadow-lg">
              {productData.reviews.map((review, index) => (
                <div key={index} className="review-box">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p>{review.rating}</p>
                  <p>{review.message}</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-3xl mx-auto my-10 p-4 bg-white shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div>
                {faqsData.map((faq, index) => (
                  <div key={index} className="mb-3 border-b pb-2">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left font-semibold text-lg flex justify-between items-center"
                    >
                      {faq.question}
                      <span>{openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>

        {/* Responsive CSS */}
        <style>
          {`
          .reviews-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .review-box {
            border: 1px solid gray;
            border-radius: 8px;
            padding: 15px;
          }

          @media (max-width: 768px) {
            .reviews-container {
              grid-template-columns: repeat(1, 1fr); /* 1 column on small screens */
            }

            .review-box {
              text-align: center;
            }
          }
        `}
        </style>
      </div>

      <div>
        <h1 className=" mt-16 mb-10 text-[48px] font-bold leading-[57.6px] tracking-[0%] text-center font-integral">
          NEW ARRIVALS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
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
                <FaStarHalf className="text-yellow-400"/>
              </div>

              {/* Price */}
              <h1 className="text-lg font-semibold mt-2">{product.price}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
