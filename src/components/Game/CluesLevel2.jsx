import React from "react";
import "./gameCard.css";


export default function Clues(
  id,
  subjects,
  description,
  eyes,
  eyes_raw,
  hair,
  hair_raw,
  height_max,
  height_min,
  languages,
  locations,
  occupations,
  person_classification,
  place_of_birth,
  race,
  race_raw,
  remarks,
  scars_and_marks,
  sex,
  suspects,
  weight,
  weight_max,
  weight_min
) {
  let numbers = id?.reward_text
    ?.split("")
    .filter((char) => (!isNaN(char) ? char : false))
    .join("")
    .trim()
    .split(" ");

  return (
    <div className="wantClue">
        <div className=" p-5 mt-8 flex flex-col text-white text-md w-72 shadow-lg bopacity-90 rounded-md">
        <h1 className="font-bold bg-black m-1 text-2xl rounded-md opacity-70">
          CRIMINAL EXPEDIENT:
        </h1>
        {id?.subjects?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🚨 Subjects: {id.subjects}
          </h5>
        ) : (
          <></>
        )}
        {id?.person_classification?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📝 Person Classification: {id.person_classification}
          </h5>
        ) : (
          <></>
        )}
        {id?.complexion?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            Complexion: {id.complexion}
          </h5>
        ) : (
          <></>
        )}
        {/* {id?.eyes?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">Eyes Color: {id.eyes}</h5>
        ) : (
          <></>
        )} */}
        {/* {id?.hair?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">Hair Color: {id.hair}</h5>
        ) : (
          <></>
        )} */}
        {id?.languages?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            Languages: {id.languages}
          </h5>
        ) : (
          <></>
        )}
        {id?.dates_of_birth_used?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📅 Birth Date Used: {id.dates_of_birth_used}
          </h5>
        ) : (
          <></>
        )}
        {id?.place_of_birth?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🎈 Birth Place Used: {id.place_of_birth}
          </h5>
        ) : (
          <></>
        )}{" "}
        {id?.description?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📑 Description: {`${id?.description?.slice(0, 70)}...`}
          </h5>
        ) : (
          <></>
        )}
        {id?.locations?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🌏 Locations: {id.locations}
          </h5>
        ) : (
          <></>
        )}
        {id?.occupations?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🛠 Occupations: {id.occupations}
          </h5>
        ) : (
          <></>
        )}
        {id?.suspects?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🤝 Suspects: {id.suspects}
          </h5>
        ) : (
          <></>
        )}{" "}
      </div>
    </div>
  );
}
