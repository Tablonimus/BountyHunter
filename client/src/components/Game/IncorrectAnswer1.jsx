import React from "react";

export default function IncorrectAnswer1(
  id,
  title,
  reward_text,
  images,
  url,
  subjects
) {
  let numbers = id?.reward_text
    ?.split("")
    .filter((char) => (!isNaN(char) ? char : false))
    .join("")
    .trim()
    .split(" ");

  return (
    <div className="want">
         <div className=" flex items-center h-36 w-40 mt-20 ">
        <img
          src={
            id?.images?.length > 0 ? (
              id.images[0].thumb
            ) : (
              <>Loading...</>
            )
          }
          alt="Image deleted for your security by FBI"
          className="w-40 h-40 rounded-md shadow-lg object-cover"
        />
      </div>
      <div className="m-2 flex flex-col items-center justify-center">
        <h5 className="text-[14px] font-bold text-black">{id.title}</h5>
      </div>
      {/* <a href={id.url} target="_blank">
        <div className="flex  flex-col items-center justify-center">
          <Tooltip content="Go to FBI summary" placement="top" trigger="hover">
            <div className="bg--500 mt-20 h-40 w-40">
              {/* <img
                src={id.images[0].thumb}
                alt="Protected Image"
                className="w-40 h-40 cover"
              /> 
            </div>
          </Tooltip>
          <div className=" flex flex-col items-center justify-center">
            <h5 className="text-[14px] font-bold text-black">
              {`${id.title.slice(0, 20)}...`}
            </h5>
            <h5 className="text-[11px] text-black font-semibold">
              {`${subjects[0].slice(0, 50)}`}
            </h5>
            <h5 className="text-[25px] text-red-500 font-bold">
              {" "}
               {`${
              numbers[0] === "" || !numbers.length
                ? "1000"
                : numbers.length <= 4
                ? `$${numbers}`
                : `$${numbers.join("").slice(0, -4)}`
            }`} 
            </h5>
          </div>
        </div>
      </a>   */}
    </div>
  );
}
