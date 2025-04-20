import React from "react";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  Star,
  StarHalf,
  StarHalfIcon,
  StarIcon,
  User,
} from "lucide-react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { motion } from "framer-motion";
import {useNavigate } from 'react-router-dom';

function Home() {
  const brands = ["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"];
  // ye second section ka part h
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

  // ye third section ka part h
  const products2 = [
    {
      id: 1,
      name: "VERTICAL STRIPED SHIRT",
      price: "$210",
      image: "/public/5.png.png",
    },
    {
      id: 2,
      name: "COURAGE GRAPHIC T-SHIRT",
      price: "$212",
      image: "/public/6.png.png",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$145",
      image: "/public/7.png.png",
    },
    {
      id: 4,
      name: "FADED SKINNY JEANS",
      price: "$80",
      image: "/public/8.png.png",
    },
  ];

  // part of fifth section
  const cards = [
    {
      id: 1,
      icon: "🌟🌟🌟🌟🌟",
      title: "Sarah M.",
      desc: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations..",
    },
    {
      id: 2,
      icon: "🌟🌟🌟🌟🌟",
      title: "Alex M.",
      desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      icon: "🌟🌟🌟🌟🌟",
      title: "James L.",
      desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      icon: "🌟🌟🌟🌟🌟",
      title: "Rawn L.",
      desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends",
    },
    {
      id: 5,
      icon: "🌟🌟🌟🌟🌟",
      title: "Cavin B.",
      desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends",
    },
    {
      id: 6,
      icon: "🌟🌟🌟🌟🌟",
      title: "Aren h.",
      desc: "TAs someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends",
    },
  ];

  return (
    <>
      <div className="relative bg-white p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center ">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button cl  assName="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Shop Now
          </button>
          <div className="flex justify-center md:justify-start space-x-8 mt-6">
            <div className="text-center">
              <span className="text-lg font-bold">200+</span>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold">2,000+</span>
              <p className="text-gray-500 text-sm">High-Quality Products</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold">30,000+</span>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image Section - Background Removed & Bigger Image */}
        <div className="md:w-1/2 flex justify-end bg-white m">
          <img
            src="\public\model.png" // Direct path use karo
            alt="Fashion models"
            className="w-[95%] md:w-[85%] lg:w-[80%] h-100 rounded-lg  object-cover bg-white mr-28 "
          />
        </div>

        {/* Brand Logos - NO GAP! */}

       
       
      </div>
      {/* end of first section */}


      <div className="relative w-full overflow-hidden bg-black py-4 -mt-16">
  <motion.div
    className="flex text-white text-sm font-semibold w-max"
    animate={{ x: ["0%", "-50%"] }} // Moves continuously, only halfway to create a loop
    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    style={{ minWidth: "max-content" }} // Ensures content takes up only needed space
  >
    {/* Duplicate brands to ensure infinite scrolling */}
    {brands.concat(brands).map((brand, index) => (
      <h2
        key={index}
        className={`text-2xl font-bold uppercase px-8 ${
          brand === "Versace"
            ? "font-versace"
            : brand === "Zara"
            ? "font-zara"
            : brand === "Gucci"
            ? "font-gucci"
            : brand === "Prada"
            ? "font-prada"
            : "font-calvin"
        }`}
      >
        {brand}
      </h2>
    ))}
  </motion.div>
</div>


      {/* start of second section */}
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
                onClick={}
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
              <h1 className="text-lg font-semibold mt-2">{product.price}</h1>
            </div> 
          ))}
        </div>
      </div>
      {/* end of second section */}

      {/* start of third section */}

      <div>
        <h1 className=" mt-16 mb-10 text-[48px] font-bold leading-[57.6px] tracking-[0%] text-center font-integral">
          TOP SELLING
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {products2.map((products2) => (
            <div
              key={products2.id}
              className="text-center bg-white p-4 rounded-lg shadow-md"
            >
              {/* Equal-sized images */}
              <img
                src={products2.image}
                alt={products2.name}
                className="w-full h-64 object-cover rounded-md"
              />

              {/* Product Name */}
              <h1 className="text-lg font-semibold mt-3">{products2.name}</h1>

              {/* Star Ratings */}
              <div className="flex justify-center mt-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
              </div>

              {/* Price */}
              <h1 className="text-lg font-semibold mt-2">{products2.price}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* end of third section */}

      {/* start of fourth section */}

      <div className="w-full max-w-7xl mx-auto p-6 bg-gray-300 rounded-lg mt-8 mb-15">
        <h1 className="text-center text-4xl font-extrabold pb-10 mt-10">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {/* Row 1: Casual (Square) + Formal (Rectangle) */}
          <div className="h-56 w-full rounded-lg  col-span-1">
            <img
              src="/public/Frame 61.png"
              alt="Casual"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-56 w-full rounded-lg overflow-hidden col-span-2">
            <img
              src="/public/Frame 62.png"
              alt="Formal"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Row 2: Party (Rectangle) + Gym (Square) */}
          <div className="h-56 w-full rounded-lg overflow-hidden col-span-2">
            <img
              src="/public/Frame 64.png"
              alt="Party"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-56 w-full rounded-lg overflow-hidden col-span-1">
            <img
              src="/public/Frame 63.png"
              alt="Gym"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* end of fourth section */}

      {/* start of fifth section */}
     

<div className="w-full max-w-7xl mx-auto p-4 bg-gray-300 rounded-lg mt-10">
      <h1 className="text-center text-3xl font-bold mb-8">OUR HAPPY CUSTOMERS</h1>

      <div className="px-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={2000}
          stopOnHover
          emulateTouch
          swipeable
          dynamicHeight
          centerMode
          centerSlidePercentage={100} // Default for mobile
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              >
                {"<"}
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transform translate-x-1/2 top-1/2 -translate-y-1/2"
              >
                {">"}
              </button>
            )
          }
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md text-center mx-2 h-full flex flex-col justify-between"
              style={{ minHeight: "200px" }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h1 className="text-lg font-semibold">{card.title}</h1>
              <p className="text-gray-600 mt-2">{card.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Home;
