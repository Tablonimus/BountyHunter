import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import bounty from "../../assets/images/bounty.png";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBarHome() {
  return (
    <Navbar
      fluid={true}
      class="bg-[#6D4A33] rounded-t-lg shadow-lg flex justify-between"
    >
      <img src={bounty} className="m-2 w-24" alt="Flowbite Logo" />
      <span className="mt-5 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <SearchBar />
      </span>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/newcharacter">
          <div className="m-1">
            <Button color={"warning"}>Create Criminal</Button>
          </div>
        </Navbar.Link>
        <Navbar.Link href="/game">
          <div className="m-1">
            <Button color={"warning"}>Play Game</Button>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
