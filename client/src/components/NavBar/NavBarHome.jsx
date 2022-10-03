import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import bounty from "../../assets/images/bounty.png";

export default function NavBarHome() {
  return (
    <Navbar fluid={true} class="bg-[#6D4A33] rounded-t-lg shadow-lg flex justify-between">
      <img src={bounty} className="m-2 w-24" alt="Flowbite Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>

      <div className="flex m-2 md:order-2">
        <Link to="/game">
          <Button color={"warning"}>Play Game</Button>
        </Link>
      </div>
        <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Menú</Navbar.Link>
        <Navbar.Link href="/game">About</Navbar.Link>
    
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
