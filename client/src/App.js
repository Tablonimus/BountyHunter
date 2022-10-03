import logo from "./logo.svg";
import "./App.css";
import { getAllCriminals, getRewardCriminals,getCorrectAnswer,getIncorrectAnswer1,getIncorrectAnswer2 } from "./redux/actions/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import Home from "../src/components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GameLanding from "./components/Game/GameLanding";
import Menu from "./components/Menu/Menu";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCriminals());
    dispatch(getRewardCriminals())
  }, [dispatch]);

  


  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Menu />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/game"} element={<GameLanding />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
