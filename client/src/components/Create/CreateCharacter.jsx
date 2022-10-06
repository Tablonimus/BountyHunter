import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { notificationSwal } from "./notificationSwal.jsx";
import { postCharacter } from "../../redux/actions/index.js";
import axios from "axios";
import "./create.css";

export default function CreateCharacter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");
  const [urll, setUrll] = useState(
    "https://bountyhunter2.vercel.app/characterdetail"
  );
  const [loadingImage, setLoadingImage] = useState(false);

  const [input, setInput] = useState({
    title: "",
    classification: "",
    image: "",
    gender: "",
    subjects: "",
    reward_text: "",
    urlocal: urll,
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value.toString(),
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pretty");
    data.append("folder", "Images");
    setLoadingImage(true);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/ferrifullstack/image/upload",
      data
    );
    setImage(res.data.secure_url);
    setInput({
      ...input,
      image: res.data.secure_url,
    });
    setErrors(
      validate({
        ...input,
        image: res.data.secure_url,
      })
    );
    setLoadingImage(false);
  }

  function validate(input) {
    let errors = {};

    if (input.title) {
      if (!/^[a-zA-Z\s]+$/.test(input.title)) {
        errors.title = "Only letters allowed!";
      } else if (input?.name?.length > 50) {
        errors.title = "The name cannot be longer than 50 characters!";
      }
    } else errors.title = "*";

    if (!input.image) errors.image = "*";

    if (!input.classification) errors.classification = "*";

    if (!input.gender) errors.gender = "*";
    if (!input.subjects || input?.subjects?.length > 200) errors.subjects = "*";

    if (input.reward_text) {
      if (isNaN(input.reward_text)) errors.reward_text = "Only Numbers Allowed";
      if (/[  +]$/.test(input.reward_text))
        errors.reward_text = "Only Numbers Allowed!";
      if (!Number.isInteger(Number(input.age))) errors.age = "Only integers!";
      if (
        parseInt(input.reward_text) < 0 ||
        parseInt(input.reward_text) > 10000000 ||
        parseInt(input.reward_text) === 0
      )
        errors.reward_text = "Must be between 1 than 10M!";
    } else errors.reward_text = "*";

    return errors;
  }

  const have = () => {
    if (
      !input.title ||
      !input.subjects ||
      !input.image ||
      !input.gender ||
      !input.reward_text
    ) {
      return true;
    } else if (
      input.title &&
      input.subjects &&
      input.image &&
      input.gender &&
      input.reward_text
    ) {
      return false;
    } else {
      return "e";
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (have() === false) {
      Swal.fire({
        title: "Form successfully filled",
        text: "You will create a new criminal file",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonText: "Yes",
      })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(postCharacter(input)).then((e) => {
              if (e === "Criminal created") {
                notificationSwal(
                  "¡Well Done!",
                  "Criminal created successfully",
                  "success",
                  "Ok"
                );
                navigate("/home");
              } else {
                notificationSwal(
                  "¡Ooops!",
                  "The file could not be created, please try again later",
                  "error",
                  "Acept"
                );
              }
            });
          } else {
            notificationSwal(
              "Aborted operation",
              "Criminal not created",
              "error",
              "Acept"
            );
          }
        })
        .then(() => {
          navigate("/home");
        });

      setInput({
        title: "",
        classification: "",
        image: "",
        gender: "",
        subjects: "",
        reward_text: "",
        urlocal: "",
      });
      setImage("");
    } else if (have() === "e") {
      notificationSwal(
        "¡Missing Data!",
        "Full fill the form correctly",
        "error",
        "Acept"
      );
    } else
      notificationSwal(
        "¡Form with errors!",
        "Correct them, please.",
        "error",
        "Acept"
      );
  }

  console.log(input);

  return (
    <div className="flex flex-col lg:flex-col-2 items-center">
      <div id="form" className="flex flex-col items-center ">
        <div className="self-center mb-1 mt-20 text-xl font-bold text-white sm:text-2xl">
          New Expedient
        </div>

        <div className="w-80 ml-4 max-w-lg self-center">
          <form onSubmit={handleSubmit}>
            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
              <label className="font-bold flex text-white text-xl">
                Title:{" "}
                {errors.title && (
                  <p className="font-bold text-sm text-red-700 text-center p-2">
                    {errors.title}
                  </p>
                )}
              </label>

              <input
                type="text"
                name="title"
                value={input.name}
                onChange={(e) => handleChange(e)}
                placeholder="Name or crime..."
                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent"
              />
            </div>
            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
              <fieldset onChange={(e) => handleChange(e)}>
                <legend className="font-bold flex text-white text-xl">
                  Person Classification:
                  {errors.gender && (
                    <p className="font-bold text-sm text-red-700 text-center p-2">
                      {errors.gender}
                    </p>
                  )}
                </legend>
                <span className="p-1">
                  <input
                    type="radio"
                    name="classification"
                    value="main"
                    className="w-4 h-4 mx-1 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Main</label>
                </span>
                <span className="p-1">
                  <input
                    type="radio"
                    name="classification"
                    value="Victim"
                    className="w-4 h-4 mx-1 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Victim
                  </label>
                </span>
                <span className="p-1">
                  <input
                    type="radio"
                    name="classification"
                    value="unknown"
                    className="w-4 h-4 mx-2 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Unknown
                  </label>
                </span>
              </fieldset>
            </div>
            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
              <fieldset onChange={(e) => handleChange(e)}>
                <legend className="font-bold flex text-white text-xl">
                  Gender:{" "}
                  {errors.gender && (
                    <p className="font-bold text-sm text-red-700 text-center p-2">
                      {errors.gender}
                    </p>
                  )}
                </legend>
                <span className="p-1">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="w-4 h-4 mx-2 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Female
                  </label>
                </span>
                <span className="p-1">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="w-4 h-4 mx-2 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Male</label>
                </span>
                <span className="p-1">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="w-4 h-4 mx-2 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Other</label>
                </span>
              </fieldset>
            </div>

            <div className=" bg-black rounded-md border opacity-90 shadow-lg">
              <label className="font-bold flex text-white text-xl">
                Image:{" "}
                {errors.image && (
                  <p className="font-bold text-sm text-red-700 text-center p-2">
                    {errors.image}
                  </p>
                )}
              </label>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              {loadingImage ? (
                <h3 className="font-bold text-white text-xl self-center">
                  Loading Image...
                </h3>
              ) : (
                <img src={image} alt="" className="max-w-xs" />
              )}
            </div>

            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
              <label className="font-bold text-white text-xl">
                Subjects:
                {errors.subjects && (
                  <p className="font-bold text-sm text-red-700 text-center p-2">
                    {errors.subjects}
                  </p>
                )}
              </label>
              <textarea
                name="subjects"
                maxLength="80"
                value={input.description}
                placeholder="Type here the crime's title commited..."
                onChange={(e) => handleChange(e)}
                className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent resize-none"
              />
            </div>

            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
              <label className="font-bold flex text-white text-xl">
                Reward_text:{" "}
                {errors.reward_text && (
                  <p className="font-bold text-sm text-red-700 text-center p-2">
                    {errors.reward_text}
                  </p>
                )}
              </label>
              <input
                type="text"
                name="reward_text"
                value={input.reward_text}
                maxLength="8"
                onChange={(e) => handleChange(e)}
                placeholder="$...."
                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent"
              />
            </div>

            <div>
              <button
                type="submit"
                className="py-2 px-4 my-2 w-full bg-yellow-900 hover:bg-yellow-900 focus:ring-yellow-900 focus:ring-offset-yellow-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Create File
              </button>
            </div>
          </form>

          <Link to="/home">
            <button className="py-2 px-4 w-full bg-yellow-900 hover:bg-yellow-900 focus:ring-yellow-900 focus:ring-offset-yellow-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
