import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import bounty from "../../assets/images/bounty.png";

export default function NavBarHome() {
  return (
    <Navbar
      fluid={true}
      class="bg-[#6D4A33] rounded-t-lg shadow-lg"
    >
      <Navbar.Brand href="https://bountyhunter2.vercel.app/">
        <img src={bounty} className="ml-5 w-24" alt="Bounty-Hunter" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        
        </span>
      </Navbar.Brand>
      {/*      <Link to="/">
      <img src={bounty} className="m-2 w-20" alt="Bounty-Hunter" />
      </Link> */}
  <div className="flex md:order-2 mr-5">
    <Button color="warning">
      Create Criminal
    </Button>
    <Navbar.Toggle />
  </div>
      

      <Navbar.Collapse>
        <Navbar.Link href="/game">
          <div className="m-1">
            <h1 className="text-white hover:text-yellow-500">Game</h1>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/">
          <div className="m-1">
            <h1 className="text-white hover:text-yellow-500">Main Menu</h1>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
