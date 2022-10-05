import React, { useState } from "react";
import { useSelector } from "react-redux";
import RewardCard from "../Cards/RewardCard";
import NavBarHome from "../NavBar/NavBarHome";
import Pagination from "../Pagination/Pagination";
import "./Home.css";

export default function Home() {
  
  const reward = useSelector((state) => state.rewardCriminals);

  console.log("reawe", reward);
  //PAGINATION---
  const [currentPage, setCurrentPage] = useState(1);
  const [criminalsPerPage, setCriminalsPerPage] = useState(24);
  const indexOfLastCriminal = currentPage * criminalsPerPage;
  const indexOfFirstCriminal = indexOfLastCriminal - criminalsPerPage;
  const currentCriminals = reward?.slice(
    indexOfFirstCriminal,
    indexOfLastCriminal
  );



  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div id="Home" className="">
      <NavBarHome />
      <Pagination
        criminalsPerPage={criminalsPerPage}
        reward={reward?.length}
        pagination={pagination}
      />
      <div className="flex flex-col  items-center justify-center md:grid md:grid-cols-4 :justify-around">
        {currentCriminals?.length > 0
          ? currentCriminals?.map((criminal) => (
              <RewardCard
                key={criminal.uid}
                id={criminal?.uid}
                reward_text={criminal.reward_text}
                images={criminal.images}
                url={criminal.url}
                title={criminal.title}
                subjects={criminal.subjects}
              />
            ))
          : "componente de carga"}
      </div>
    </div>
  );
}
