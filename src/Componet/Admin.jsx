import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../img/background.jpg";
function Admin() {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-auto flex justify-center items-center px-[5%] py-[5%] bg-orange-200"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form
          action=""
          className="border-4  p-[20px] m-[20px] border-black border-black-500/50 "
        >
          <label
            htmlFor=""
            className="text-lg text-black decoration-solid flex m-[10px] "
          >
            Username/Gmail/Phone Number
          </label>
          <input
            type="text"
            placeholder="enter username/ gmail/ phone "
            className="w-[500px] h-[50px]  hover:decoration-solid border-2 border-black rounded-full bg-white  hover:bg-white hover:text-black placeholder:text-black placeholder:p-5 text-black before:bg-black"
          />

          <label
            htmlFor=""
            className="text-lg text-black  decoration-solid flex  m-[10px]"
          >
            password
          </label>
          <input
            type="text"
            placeholder="enter your  password "
            className="w-[500px] h-[50px]  hover:decoration-solid border-2 border-black rounded-full bg-white input-type hover:bg-white hover:text-black placeholder:text-black placeholder:p-5 text-black before:bg-black"
          />

          <Link
            to="/admin/adminNav/dashboard"
            className="flex bg-blue-400 border-2 border-black text-lg decoration-solid rounded-full w-[500px] h-[50px] mt-[50px] items-center justify-center hover:bg-black hover:text-white"
          >
            Login
          </Link>

          <p className="mt-4 text-center">
            cerate a new account{" "}
            <Link
              to="/doner"
              className="text-red-500 text-xl hover:text-blue-300 hover:underline"
            >
              Regiter here
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
