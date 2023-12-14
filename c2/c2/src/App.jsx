import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
function App() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <div className="w-[20%] ">
        <div className="relative">
          <FaRegHeart className="absolute text-white top-3 right-3" />
          <img
            className="rounded-lg "
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex items-center justify-between mx-1 my-1">
            <h1 className="font-semibold">Geforce RTX</h1>
            <div className="flex items-center gap-x-0.5">
              <FaStar size={13} />
              <span className="text-sm">5.0</span>
            </div>
          </div>
          <p className="mx-1 my-1 text-gray-500">Best Gaming Card</p>
          <p className="font-thin">
            <span className="font-semibold mx-1 ">PKR</span>40000
          </p>
        </div>
      </div>
      <div className="w-[20%] ">
        <div className="relative">
          <FaRegHeart className="absolute text-white top-3 right-3" />
          <img
            className="rounded-lg "
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex items-center justify-between mx-1 my-1">
            <h1 className="font-semibold">Geforce RTX</h1>
            <div className="flex items-center gap-x-0.5">
              <FaStar size={13} />
              <span className="text-sm">5.0</span>
            </div>
          </div>
          <p className="mx-1 my-1 text-gray-500">Best Gaming Card</p>
          <p className="font-thin">
            <span className="font-semibold mx-1 ">PKR</span>40000
          </p>
        </div>
      </div>
      <div className="w-[20%] ">
        <div className="relative">
          <FaRegHeart className="absolute text-white top-3 right-3" />
          <img
            className="rounded-lg "
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex items-center justify-between mx-1 my-1">
            <h1 className="font-semibold">Geforce RTX</h1>
            <div className="flex items-center gap-x-0.5">
              <FaStar size={13} />
              <span className="text-sm">5.0</span>
            </div>
          </div>
          <p className="mx-1 my-1 text-gray-500">Best Gaming Card</p>
          <p className="font-thin">
            <span className="font-semibold mx-1 ">PKR</span>40000
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;