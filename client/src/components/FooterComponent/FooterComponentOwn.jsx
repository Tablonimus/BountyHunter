import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import bounty from "../../assets/images/bounty.png";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBarHome() {
  return (
    <Navbar
      fluid={true}
      class="bg-[#6D4A33] rounded-t-lg shadow-lg opacity-70 flex justify-between"
    >
      <a href="#" className="flex flex-row hover:bg-amber-500 rounded-md shadow-lg">
        <button className="font-bold">⬆Back to Top</button>
        <img src={bounty} className="m-2 w-24" alt="Flowbite Logo" />

        <button className="font-bold">Back to Top⬆</button>
      </a>
    </Navbar>
  );
}
