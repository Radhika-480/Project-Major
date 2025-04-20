import React from "react";

function Footer() {
  return (
    <>
      <div className="relative mt-32">
        <div className="bg-black text-white font-bold text-xl grid grid-cols-1 rounded-2xl h-auto mx-auto max-w-5xl justify-around items-center absolute -top-16 left-1/2 transform -translate-x-1/2 px-6 shadow-lg py-6 w-full " >
          <div className="text-center mb-4">
            <h1 className="text-lg md:text-2xl">
              STAY UP-TO-DATE ABOUT <br className="hidden md:block" />
              OUR LATEST OFFERS
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center  w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-2 rounded-3xl w-full md:w-96 text-black text-sm"
            />
            <button className="bg-white mt-3 text-gray-950 font-Satoshi text-sm px-6 md:px-8 rounded-2xl py-2 w-full md:w-96">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Parent Footer */}
        <footer className="bg-gray-800 text-white p-8 pt-28 mt-40   ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-24">
            <div className="">
              <h1 className="text-xl font-bold mb-3 ">SHOP.CO</h1>
              <p className="text-sm text-gray-300">
                We have clothes that suit your style and <br />
                which you’re proud to wear. From <br />
                women to men.
              </p>
            </div>

            {/* Company Section */}
            <div>
              <h1 className="text-lg font-semibold mb-3">Company</h1>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h1 className="text-lg font-semibold mb-3">Help</h1>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Delivery Details</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div>
              <h1 className="text-lg font-semibold mb-3">FAQ</h1>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Manage Deliveries</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h1 className="text-lg font-semibold mb-3">Resources</h1>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">Free eBooks</a>
                </li>
                <li>
                  <a href="#">Development Tutorial</a>
                </li>
                <li>
                  <a href="#">How to - Blog</a>
                </li>
                <li>
                  <a href="#">YouTube Playlist</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center text-sm text-gray-400 mt-8">
            © 2025 SHOP.CO | All Rights Reserved.
          </div>
        </footer>
      </div>


      
    </>
  );
}

export default Footer;
