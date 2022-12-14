import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRewardCriminals } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const criminals = useSelector((state) => state.rewardCriminals);

  function handleInputChange(e) {
    e.preventDefault();

    if (e.target.value.length >= 1 && e.target.value.length >=1) {
      dispatch(getRewardCriminals(e.target.value));
    }
    if (e.target.value.length === 0) {
      dispatch(getRewardCriminals(e.target.value));
    }
  }
  return (
    <div className="flex flex-col">
      <label htmlFor="input-group-search" className="sr-only">
        Search
      </label>
      <div className="relative mb-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pt-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="input-group-search"
          className="block p-2 mt-2 pl-10 w-40 lg:w-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Search..."
        />
      </div>
      <div className="mb-2 flex"></div>
    </div>
  );
}
