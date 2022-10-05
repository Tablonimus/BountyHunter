import React from "react";
import "./reward.css";
import { Tooltip } from "flowbite-react";

export default function RewardCard(
  id,
  title,
  reward_text,
  images,
  url,
  subjects
) {
  let numbers = id.reward_text
    .split("")
    .filter((char) => (!isNaN(char) ? char : false))
    .join("")
    .trim()
    .split(" ");
  console.log(numbers);
  return (
    <div className="homeCard">
      <a href={id.url} target="_blank">
        <div className="flex  flex-col items-center justify-center">
          <Tooltip content="Go to FBI summary" placement="top" trigger="hover">
            <div className="bg--500 mt-20 h-40 w-40">
              <img
                src={id.images[0].thumb}
                alt="Protected Image"
                className="w-40 h-40 object-cover"
              />
            </div>
          </Tooltip>
          <div className=" flex flex-col items-center justify-center">
            <h5 className="text-[14px] font-bold text-black">
              {`${id.title.slice(0, 20)}...`}
            </h5>
            <h5 className="text-[11px] text-black font-semibold">
              {`${id.subjects[0].slice(0, 50)}`}
            </h5>
            <h5 className="text-[25px] text-red-500 font-bold">
              {" "}
              {`${
                numbers[0] === "" || !numbers[0].length
                  ? "$ 1000"
                  : numbers[0] === "1"
                  ? `$${numbers[0]} Millon`
                  : numbers[0].length >= 1 && numbers[0].length < 3
                  ? `$${numbers[0]} Millons`
                  : `$${numbers[0]}`
              }`}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
}
