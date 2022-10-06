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
    <div className="wantClueLevel1">
      <div className=" p-5 mt-8 flex flex-col text-white text-md w-72 opacity-90 rounded-md">
        <h1 className="font-bold bg-black m-1 text-xl rounded-md opacity-70">
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
        {id?.eyes_raw?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            👀 Eyes Raw: {id.eyes_raw}
          </h5>
        ) : (
          <></>
        )}
        {/* {id?.hair?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">Hair Color: {id.hair}</h5>
        ) : (
          <></>
        )} */}
        {id?.hair_raw?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            ✂ Hair Raw: {id.hair_raw}
          </h5>
        ) : (
          <></>
        )}
        {id?.height_max?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📏 Height Max: {id.height_max}
          </h5>
        ) : (
          <></>
        )}
        {id?.height_min?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📏 Height Min: {id.height_min}
          </h5>
        ) : (
          <></>
        )}
        {id?.languages?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            Languages: {id.languages}
          </h5>
        ) : (
          <></>
        )}
        {id?.race_raw?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🕵🏾‍♂️ Race Raw: {id.race_raw}
          </h5>
        ) : (
          <></>
        )}
        {/* {id?.race?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">Race: {id.race}</h5>
        ) : (
          <></>
        )} */}
        {id?.sex?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🚻 Sex: {id.sex}
          </h5>
        ) : (
          <></>
        )}
        {id?.weight?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🧍‍♂️ Weight: {id.weight}
          </h5>
        ) : (
          <></>
        )}
        {id?.weight_max?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🧍‍♂️ Weight Max: {id.weight_max}
          </h5>
        ) : (
          <></>
        )}
        {id?.weight_min?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            🧍‍♂️ Weight Min: {id.weight_min}
          </h5>
        ) : (
          <></>
        )}
        {id?.scars_and_marks?.length > 0 ? (
          <h5 className="font-bold bg-black m-1 rounded-md opacity-70">
            📸 Scars & Marks: {id.scars_and_marks}
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
        {id?.suspects?.length > 0 ?   <h5 className="font-bold bg-black m-1 rounded-md opacity-70">🤝 Suspects: {id.suspects}</h5> : <></>}{" "}
      </div>
    </div>
  );
}
