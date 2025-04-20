import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const servicesList = [
    "Website Design",
    "UX Design",
    "User Research",
    "Content Creation",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (service) => {
    setFormData((prevState) => {
      const updatedServices = prevState.services.includes(service)
        ? prevState.services.filter((s) => s !== service)
        : [...prevState.services, service];

      return { ...prevState, services: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
    email: "",
    message: "",
    services: [],
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full flex">
          {/* Left Content */}
          <div className="w-1/2 p-6">
            <h2 className="text-xl font-semibold">Untitled UI</h2>
            <div className="mt-4">
              <h3 className="font-semibold">Chat to us</h3>
              <p className="text-gray-600">
                Our friendly team is here to help.
              </p>
              <p className="text-blue-600">hi@untitledui.com</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Visit us</h3>
              <p className="text-gray-600">
                100 Smith Street, Collingwood VIC 3066 AU
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Call us</h3>
              <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
              <p className="text-blue-600">+1 (555) 000-0000</p>
            </div>
          </div>

          {/* Right Form (Green Box) */}
          {/* <div className="w-1/2 bg-black p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white">
              Got ideas? We've got the skills. Let's team up.
            </h2>
            <p className="text-white mt-2">
              Tell us more about yourself and what you've got in mind.
            </p>

            <form className="mt-4 space-y-4">
              <h1 className="text-white">Enter Your Name</h1>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-lg border"
              />
              <h1 className="text-white">Enter your Email</h1>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-2 rounded-lg border"
              />
              <h1 className="text-white">Message</h1>
              <textarea
                placeholder="Purpose of the meeting ..."
                className="w-full p-2 rounded-lg border"
              ></textarea>
              <h1 className="text-white">services</h1>
              <div className="flex flex-wrap gap-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />{" "}
                  <span className="text-white">Website Design</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />{" "}
                  <span className="text-white">UX Design</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />{" "}
                  <span className="text-white">User Research</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />{" "}
                  <span className="text-white">Content Creation</span>
                </label>
              </div>

              <button className="w-full bg-gray-900 text-white p-2 rounded-lg mt-4">
                Let's get started!
              </button>
            </form>
          </div> */}
<div className="w-1/2 bg-black p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-white">
        Got ideas? We've got the skills. Let's team up.
      </h2>
      <p className="text-white mt-2">
        Tell us more about yourself and what you've got in mind.
      </p>

      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        {[
          { label: "Enter Your Name", type: "text", name: "name", placeholder: "Your Name" },
          { label: "Enter Your Email", type: "email", name: "email", placeholder: "you@company.com" },
        ].map((inputField, index) => (
          <div key={index}>
            <h1 className="text-white">{inputField.label}</h1>
            <input
              type={inputField.type}
              name={inputField.name}
              placeholder={inputField.placeholder}
              className="w-full p-2 rounded-lg border"
              value={formData[inputField.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <h1 className="text-white">Message</h1>
        <textarea
          name="message"
          placeholder="Tell us a little about the project..."
          className="w-full p-2 rounded-lg border"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <div className="flex flex-wrap gap-2">
          {servicesList.map((service, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <span className="text-white">{service}</span>
            </label>
          ))}
        </div>

        <button type="submit" className="w-full bg-gray-900 text-white p-2 rounded-lg mt-4">
          Let's get started!
        </button>
      </form>
    </div>


        </div>
      </div>
    </>
  );
}

export default Contact;
