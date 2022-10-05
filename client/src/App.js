import logo from "./logo.svg";
import "./App.css";
import {

  getRewardCriminals,
  
  getLevel1,
} from "./redux/actions/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Level1 from "../src/components/Game/Level1";
import axios from "axios";
import { useSelector } from "react-redux";
import Home from "../src/components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GameLanding from "./components/Game/GameLanding";
import Menu from "./components/Menu/Menu";
import CreateCharacter from "./components/Create/CreateCharacter";
import Level3 from "./components/Game/Level3";
import Level2 from "./components/Game/Level2";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getRewardCriminals());
    dispatch(getLevel1())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Menu />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/game"} element={<GameLanding />} />
        <Route path={"/game/level1"} element={<Level1 />} />
        <Route path={"/game/level2"} element={<Level2 />} />
        <Route path={"/game/level3"} element={<Level3 />} />
        <Route path={"/newcharacter"} element={<CreateCharacter />} />
        <Route path={"/characterdetail/:name"} element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
