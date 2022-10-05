import React from "react";
import { Link } from "react-router-dom";
import menuGame from "../../assets/images/menuGame.png";
import "./menu.css";
import { Modal, Button } from "flowbite-react";
import { useState } from "react";

export default function Menu() {
  const [show, setShow] = useState(false);
  function onClick() {
    setShow(true);
  }
  function onClose() {
    setShow(false);
  }
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="menu">
        <button
          onClick={onClick}
          className="bg-black rounded-md w-44 h-16  mb-6 opacity-70 hover:opacity-80 shadow-lg"
        >
          <h5 className="text-white text-2xl hover:text-yellow-300 font-bold">
            Play Game
          </h5>
        </button>
        <Link to="/home" className="m-1">
          <button className="bg-black rounded-md w-44 h-16 opacity-70 hover:opacity-80 shadow-lg">
            <h5 className="text-white text-2xl hover:text-yellow-300 font-bold">
              Most Wanteds
            </h5>
          </button>
        </Link>

        <Modal show={show} onClose={onClose}>
          <Modal.Header>Rules</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Watch out! You are about to learn about the FBI's classified
                files, there may be information and images that hurt your
                sensitivity. If you continue to progress BountyHunters does NOT
                accept any responsibility for consequential damages to the game.
                RULES: You must choose the correct option. The game will give
                you clues of the suspect you are looking for
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Español:
                </p>
                ¡Cuidado! Estas a punto de conocer los expedientes clasificados
                del FBI, puede existir información e imagenes que hieran su
                sensibilidad. Si sigue avanzando BountyHunters NO acepta
                responsabilidad alguna por daños consecuentes al juego. REGLAS:
                Debes elegir la opción correcta. El juego te brindará pistas del
                sospechoso que estas buscando
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/game" className="m-1">
              <button className="bg-black rounded-md w-36 h-14  opacity-70 hover:opacity-80 hover:bg-green-700 shadow-lg">
                <h5 className="text-white text-xl hover:text-yellow-300 font-bold">
                  Play game
                </h5>
              </button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
