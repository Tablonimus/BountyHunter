import React from "react";
import NavBarGame from "../NavBar/NavBarGame";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function GameLanding() {
  return (
    <div className="w-full lg:flex lg:flex-row items-center px-10">
      <div className="levels">
        <div className="mt-20 ml-6 flex flex-col  items-center text-white text-md w-72 shadow-lg bopacity-90 rounded-md">
          <h1 className="font-bold bg-black m-1 text-2xl rounded-md opacity-70">
            Easy ⭐
          </h1>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🔵🔴🔵EN: For inexperienced hunters. We will provide you with
            detailed information.
          </h5>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            {" "}
            🔴🟡🔴ES: Para cazadores sin experiencia. Te brindaremos información
            detallada. Eso sí , los expedientes están sin traducir, será tarea
            tuya investigar a los sospechosos.
          </h5>
          <div className="m-1">
            <Link to="/game/level1">
              <Button color={"warning"}>Start Hunting</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="levels">
        <div className="mt-20 ml-6 flex flex-col items-center text-white text-md w-72 shadow-lg bopacity-90 rounded-md">
          <h1 className="font-bold bg-black m-1 text-2xl rounded-md opacity-70">
            Medium ⭐⭐⭐
          </h1>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🔵🔴🔵EN: Are you a born hunter? Track down the most wanted
            criminals without knowing their physical traits.
          </h5>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            {" "}
            🔴🟡🔴ES: Eres un cazador nato? Rastrea a los criminales mas
            buscados sin tener conocimiento de sus rasgos físicos. No
            traduciremos los expedientes por tí. Demuéstranos tu talento!
          </h5>
          <div className="m-1">
            <Link to="/game/level2">
              <Button color={"warning"}>Start Hunting</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="levels">
        <div className="mt-20 ml-6 flex flex-col items-center text-white text-md w-72 shadow-lg bopacity-90 rounded-md">
          <h1 className="font-bold bg-black m-1 text-2xl rounded-md opacity-70">
            Hard ⭐⭐⭐⭐⭐
          </h1>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🔵🔴🔵EN: Test your sense of smell! You will have no help.
          </h5>
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            {" "}
            🔴🟡🔴ES: Pon a prueba tu olfato! No tendrás ayuda.
          </h5>
          <div className="m-1">
            <Link to="/game/level3">
              <Button color={"warning"}>Start Hunting</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <NavBarGame />
      </div>
    </div>
  );
}
