import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CorrectAnswer from "./CorrectAnswer";
import correctt from "../../assets/images/correct.png";
import incorrect from "../../assets/images/incorrect.png";
import Clues from "./Clues";
import { useState } from "react";
import IncorrectAnswer2 from "./IncorrectAnswer2";
import IncorrectAnswer1 from "./IncorrectAnswer1";
import IncorrectAnswer3 from "./IncorrectAnswer3";
import NavBarGame from "../NavBar/NavBarGame";
import { Modal, Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Level1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reward = useSelector((state) => state.level1);
  const randomClue = Math.floor(Math.random() * reward?.length);
  const correctClue = reward ? reward[randomClue] : false;

  const randomClue1 = Math.floor(Math.random() * reward?.length - 1);
  const filterForClue1 = reward?.filter(async (clue1) => clue1 !== correctClue);
  const incorrectClue1 = filterForClue1 ? filterForClue1[randomClue1] : false;
  const randomClue2 = Math.floor(Math.random() * reward?.length - 2);
  const filterForClue2 = reward?.filter(
    async (clue2) => clue2 !== correctClue && clue2 !== incorrectClue1
  );
  const incorrectClue2 = filterForClue2 ? filterForClue2[randomClue2] : false;

  const randomClue3 = Math.floor(Math.random() * reward?.length - 3);
  const filterForClue3 = reward?.filter(
    async (clue2) => clue2 !== correctClue && clue2 !== incorrectClue1
  );
  const incorrectClue3 = filterForClue3 ? filterForClue3[randomClue3] : false;

  const sortAnswer = Math.floor(Math.random() * 4);

  //MODAL HANDLERS------------------------------------------------------------------
  const [correct, setCorrect] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  function next() {
    setCorrect(true);
  }

  function wrong(e) {
    e.preventDefault();
    setWrongAnswer(true);
  }

  function playAgainClick() {
    setCorrect(false);
    setWrongAnswer(false);
  }

  function onClick() {
    navigate("/");
  }

  function onClose() {
    setCorrect(false);
    setWrongAnswer(false);
  }

  //-------------------------------------------------------------------------------
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center justify-around">
      <div className="flex flex-col items-center lg:items-start lg:flex lg:flex-row justify-around mb-5 ">
        <div className="w-96 h-[40rem]">
          <Clues
            id={correctClue?.uid}
            reward_text={correctClue?.reward_text}
            images={correctClue?.images}
            url={correctClue?.url}
            title={correctClue?.title}
            subjects={correctClue?.subjects}
            description={correctClue?.description}
            dates_of_birth_used={correctClue?.dates_of_birth_used}
            eyes={correctClue?.eyes}
            eyes_raw={correctClue?.eyes_raw}
            hair={correctClue?.hair}
            hair_raw={correctClue?.hair_raw}
            height_max={correctClue?.height_max}
            height_min={correctClue?.height_min}
            languages={correctClue?.languages}
            locations={correctClue?.locations}
            occupations={correctClue?.occupations}
            person_classification={correctClue?.person_classification}
            place_of_birth={correctClue?.place_of_birth}
            race={correctClue?.race}
            race_raw={correctClue?.race_raw}
            remarks={correctClue?.remarks}
            scars_and_marks={correctClue?.scars_and_marks}
            sex={correctClue?.sex}
            suspects={correctClue?.suspects}
            weight={correctClue?.weight}
            weight_max={correctClue?.weight_max}
            weight_min={correctClue?.weight_min}
          />
        </div>
        <div className="w-11/12">
          {correctClue ? (
            <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:m-14">
              {/* POSIBILIDAD 0 */}
              {sortAnswer === 0 ? (
                <>
                  <button onClick={(e) => next(e)}>
                    <CorrectAnswer
                      id={correctClue?.uid}
                      reward_text={correctClue?.reward_text}
                      images={correctClue?.images}
                      url={correctClue?.url}
                      title={correctClue?.title}
                      subjects={correctClue?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer1
                      id={incorrectClue1?.uid}
                      reward_text={incorrectClue1?.reward_text}
                      images={incorrectClue1?.images}
                      url={incorrectClue1?.url}
                      title={incorrectClue1?.title}
                      subjects={incorrectClue1?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer2
                      id={incorrectClue2?.uid}
                      reward_text={incorrectClue2?.reward_text}
                      images={incorrectClue2?.images}
                      url={incorrectClue2?.url}
                      title={incorrectClue2?.title}
                      subjects={incorrectClue2?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer3
                      id={incorrectClue3?.uid}
                      reward_text={incorrectClue3?.reward_text}
                      images={incorrectClue3?.images}
                      url={incorrectClue3?.url}
                      title={incorrectClue3?.title}
                      subjects={incorrectClue3?.subjects}
                    />
                  </button>
                </>
              ) : (
                false
              )}
              {/* POSIBILIDAD 1 */}
              {sortAnswer === 1 ? (
                <>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer1
                      id={incorrectClue1?.uid}
                      reward_text={incorrectClue1?.reward_text}
                      images={incorrectClue1?.images}
                      url={incorrectClue1?.url}
                      title={incorrectClue1?.title}
                      subjects={incorrectClue1?.subjects}
                    />
                  </button>
                  <button onClick={(e) => next(e)}>
                    <CorrectAnswer
                      id={correctClue?.uid}
                      reward_text={correctClue?.reward_text}
                      images={correctClue?.images}
                      url={correctClue?.url}
                      title={correctClue?.title}
                      subjects={correctClue?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer2
                      id={incorrectClue2?.uid}
                      reward_text={incorrectClue2?.reward_text}
                      images={incorrectClue2?.images}
                      url={incorrectClue2?.url}
                      title={incorrectClue2?.title}
                      subjects={incorrectClue2?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer3
                      id={incorrectClue3?.uid}
                      reward_text={incorrectClue3?.reward_text}
                      images={incorrectClue3?.images}
                      url={incorrectClue3?.url}
                      title={incorrectClue3?.title}
                      subjects={incorrectClue3?.subjects}
                    />
                  </button>
                </>
              ) : (
                false
              )}
              {/* POSIBILIDAD 2 */}
              {sortAnswer === 2 ? (
                <>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer1
                      id={incorrectClue1?.uid}
                      reward_text={incorrectClue1?.reward_text}
                      images={incorrectClue1?.images}
                      url={incorrectClue1?.url}
                      title={incorrectClue1?.title}
                      subjects={incorrectClue1?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer2
                      id={incorrectClue2?.uid}
                      reward_text={incorrectClue2?.reward_text}
                      images={incorrectClue2?.images}
                      url={incorrectClue2?.url}
                      title={incorrectClue2?.title}
                      subjects={incorrectClue2?.subjects}
                    />
                  </button>
                  <button onClick={(e) => next(e)}>
                    <CorrectAnswer
                      id={correctClue?.uid}
                      reward_text={correctClue?.reward_text}
                      images={correctClue?.images}
                      url={correctClue?.url}
                      title={correctClue?.title}
                      subjects={correctClue?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer3
                      id={incorrectClue3?.uid}
                      reward_text={incorrectClue3?.reward_text}
                      images={incorrectClue3?.images}
                      url={incorrectClue3?.url}
                      title={incorrectClue3?.title}
                      subjects={incorrectClue3?.subjects}
                    />
                  </button>
                </>
              ) : (
                false
              )}
              {/* POSIBILIDAD 3 */}
              {sortAnswer === 3 ? (
                <>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer1
                      id={incorrectClue1?.uid}
                      reward_text={incorrectClue1?.reward_text}
                      images={incorrectClue1?.images}
                      url={incorrectClue1?.url}
                      title={incorrectClue1?.title}
                      subjects={incorrectClue1?.subjects}
                    />
                  </button>

                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer2
                      id={incorrectClue2?.uid}
                      reward_text={incorrectClue2?.reward_text}
                      images={incorrectClue2?.images}
                      url={incorrectClue2?.url}
                      title={incorrectClue2?.title}
                      subjects={incorrectClue2?.subjects}
                    />
                  </button>
                  <button onClick={(e) => wrong(e)}>
                    <IncorrectAnswer3
                      id={incorrectClue3?.uid}
                      reward_text={incorrectClue3?.reward_text}
                      images={incorrectClue3?.images}
                      url={incorrectClue3?.url}
                      title={incorrectClue3?.title}
                      subjects={incorrectClue3?.subjects}
                    />
                  </button>
                  <button onClick={(e) => next(e)}>
                    <CorrectAnswer
                      id={correctClue?.uid}
                      reward_text={correctClue?.reward_text}
                      images={correctClue?.images}
                      url={correctClue?.url}
                      title={correctClue?.title}
                      subjects={correctClue?.subjects}
                    />
                  </button>
                </>
              ) : (
                false
              )}

              {/* CORRECT ANSWER MESSAGE */}

              <Modal show={correct} size="md" popup={true} onClose={onClose}>
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center bg-green-500 rounded-lg p-5">
                    <img src={correctt} alt="" className="w-10" />
                    <h3 className="mb-5 text-lg font-bold text-white dark:text-gray-400">
                      Hunting Successful! Play Again?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button color="success" onClick={playAgainClick}>
                        Yes, Continue...
                      </Button>
                      <Button color="gray" onClick={onClick}>
                        No
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              {/* WRONG ANSWER MESSAGE */}

              <Modal
                show={wrongAnswer}
                size="md"
                popup={true}
                onClose={onClose}
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center bg-red-500 rounded-lg p-5 ">
                    <img src={incorrect} alt="" className="w-10" />
                    <h3 className="mb-5 text-lg font-bold text-white dark:text-gray-400">
                      Wrong Answer! Play Again?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button color="success" onClick={playAgainClick}>
                        Yes, I'm prepared
                      </Button>
                      <Button color="gray" onClick={onClick}>
                        No
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          ) : (
            <div className="w-screen h-screen flex flex-col items-center justify-center">
              <div className="h-56 flex flex-col items-center justify-around shadow-lg bg-black opacity-70 rounded-md border">
                <h1 className="text-2xl text-white font-bold">
                  Loading FBI files
                </h1>
                <Spinner
                  color="warning"
                  aria-label="Extra large spinner example"
                  size="xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <NavBarGame />
    </div>
  );
}
