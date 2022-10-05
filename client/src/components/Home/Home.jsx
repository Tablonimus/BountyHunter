import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RewardCard from "../Cards/RewardCard";
import NavBarHome from "../NavBar/NavBarHome";
import Pagination from "../Pagination/Pagination";
import { getRewardCriminals } from "../../redux/actions";
import FooterComponentOwn from "../FooterComponent/FooterComponentOwn"
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getRewardCriminals());
    setCurrentPage(1)
  }, [dispatch]);
  const reward = useSelector((state) => state.rewardCriminals);
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
      <div className="flex flex-col w-full h-full  items-center justify-center md:grid md:grid-cols-4 :justify-around">
        {currentCriminals?.length > 0 ? (
          currentCriminals?.map((criminal) => (
            <RewardCard
              key={criminal.uid}
              id={criminal?.uid}
              reward_text={criminal.reward_text}
              images={criminal.images}
              image={criminal.image}
              url={criminal.url}
              title={criminal.title}
              subjects={criminal.subjects}
            />
          ))
        ) : (
          <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="h-56 flex flex-col items-center justify-around shadow-lg bg-black opacity-70 rounded-md border">
              <h1 className="text-2xl text-white font-bold">Loading FBI files</h1>
              <Spinner
                color="warning"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </div>
          </div>
        )}
      </div>
      <FooterComponentOwn/>
    </div>
  );
}
