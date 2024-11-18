import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [adminMessage, setAdminMessage] = useState("");

  useEffect(() => {
    const storedAdminMessage = localStorage.getItem("adminMessage");
    if (storedAdminMessage) {
      setAdminMessage(storedAdminMessage);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const storedMessages = JSON.parse(localStorage.getItem("formMessages")) || [];
    const updatedMessages = [...storedMessages, formData];
  
    localStorage.setItem("formMessages", JSON.stringify(updatedMessages));
  
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  

  return (
    <div>
      <Navbar/>
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center px-4 flex-row p-[50px]">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <div className="flex flex-row">

        {adminMessage && (
          <div className="mb-6 p-4 bg-yellow-100 text-yellow-700 rounded-lg shadow">
            <p>{adminMessage}</p>
          </div>
        )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ContactUs;
