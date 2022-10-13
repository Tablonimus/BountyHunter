import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import bounty from "../../assets/images/bounty.png";

export default function NavBarGame() {
  return (
    <Navbar
      fluid={true}
      class="bg-[#6D4A33] rounded-md shadow-lg flex lg:flex-col justify-between"
    >
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>

      <div className="flex flex-col items-center m-2 md:order-2">
      <img src={bounty} className="m-2 w-24" alt="Flowbite Logo" />
        <Link to="/game" className="mb-2">
          <Button color={"warning"}>Select Level</Button>
        </Link>
        <Link to="/">
          <Button color={"warning"}>Back to Menu</Button>
        </Link>
      </div>
    </Navbar>
  );
}
