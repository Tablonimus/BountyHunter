import React, { useState } from "react";
import { useSelector } from "react-redux";
import lata from "../../assets/images/lata.png";
import { Navbar, Button } from "flowbite-react";

export default function Pagination({ criminalsPerPage, reward, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(reward / criminalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Navbar class="w-full rounded-b-lg flex flex-row items-center bg-[#6D4A33] opacity-70 ">
    
      <div className="lg:ml-44">
 
          {pageNumbers?.map((number) => (
            <button
              key={number}
              className="w-7 lg:w-10 mb-6 lg:mb-2 m-1 opacity-70 hover:opacity-100 "
              onClick={() => pagination(number)}
            >
              <img src={lata} alt="" className="shadow-lg object-cover" />
              <h5 className="absolute ml-1 lg:ml-3 lg:top-32 bg-black rounded-full w-5 text-sm lg:text-md font-bold text-white opacity-90 hover:opacity-100 hover:text-yellow-200">
                {number.length === 1 ? `0${number}` : number}
              </h5>
            </button>
          ))}
 
      </div>
    </Navbar>
  );
}
