import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { notificationSwal } from "./notificationSwal.jsx";

import axios from "axios";
import "./create.css";

export default function RegisterPet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);

  const [input, setInput] = useState({
    title: "",
    classification: "",
    image: "",
    gender: "",
    subjects: "",
    reward: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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
      } else if (input.name.length > 50) {
        errors.title = "The name cannot be longer than 20 characters!";
      }
    } else errors.name = "*";

    if (!input.image) errors.image = "*";

    if (!input.classification) errors.classification = "*";

    if (!input.gender) errors.gender = "*";
    if (!input.subjects || input.subjects.length > 200) errors.gender = "*";

    if (input.reward) {
      if (isNaN(input.reward)) errors.reward = "Only Numbers Allowed";
      if (/[  +]$/.test(input.reward)) errors.reward = "Only Numbers Allowed!";
      if (!Number.isInteger(Number(input.age))) errors.age = "Only integers!";
      if (
        parseInt(input.reward) < 0 ||
        parseInt(input.reward) > 10000000 ||
        parseInt(input.reward) === 0
      )
        errors.reward = "Must be between 1 than 10M!";
    } else errors.reward = "*";

    return errors;
  }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     if (have() === false) {
  //       Swal.fire({
  //         title: "¿Está seguro de que desea crear esta mascota?",
  //         text: "Esta mascota se publicará en adopción",
  //         icon: "warning",
  //         showCancelButton: true,
  //         cancelButtonText: "No",
  //         confirmButtonText: "Sí",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           let id = input.id;
  //           delete input.id;
  //           dispatch(postPet(id, input)).then((e) => {
  //             if (e === "Mascota creada correctamente") {
  //               notificationSwal(
  //                 "¡Enhorabuena!",
  //                 "Mascota creada con éxito",
  //                 "success",
  //                 "Ok"
  //               );
  //               navigate("/home");
  //             } else {
  //               notificationSwal(
  //                 "¡Ooops!",
  //                 "No se pudo crear la mascota, intente mas tarde",
  //                 "error",
  //                 "Aceptar"
  //               );
  //             }
  //           });
  //         } else {
  //           notificationSwal(
  //             "Operación cancelada",
  //             "Mascota no creada",
  //             "error",
  //             "Aceptar"
  //           )
  //         }
  //       }).then(() => {
  //         navigate("/home")
  //       });

  //       setInput({
  //         id: "",
  //         name: "",
  //         image: "",
  //         imagePool: [],
  //         type: "",
  //         description: "",
  //         size: "",
  //         age: 0,
  //         vaccination: "",
  //         castrated: false,
  //         gender: "",
  //         place: "",
  //         place_longitude: "",
  //         place_latitude: "",
  //       });
  //       setImage("");
  //     } else if (have() === "e") {
  //       notificationSwal(
  //         "¡Faltan datos!",
  //         "Complete todos los campos obligatorios",
  //         "error",
  //         "Aceptar"
  //       );
  //     } else
  //       notificationSwal(
  //         "¡Hay errores!",
  //         "Corríjalos por favor",
  //         "error",
  //         "Aceptar"
  //       );
  //   }

  // function handleDelete(event) {
  //   setInput({
  //     ...input,
  //     imagePool: input.imagePool.filter((e) => e !== event),
  //   });
  //   setErrors(
  //     validate({
  //       ...input,
  //       imagePool: input.imagePool.filter((e) => e !== event),
  //     })
  //   );
  // }

  // let key = 0;
  // function addKey() {
  //   return key++;
  // }

  return (
    <div className="flex flex-col lg:flex-col-2 items-center">
      <div id="form" className="flex flex-col items-center ">
        <div className="self-center mb-1 mt-20 text-xl font-bold text-white sm:text-2xl">
          New Expedient
        </div>

        <div className="w-80 ml-4 max-w-lg self-center">
          <form /* onSubmit={handleSubmit} */>
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

            <div className=" bg-black rounded-md border opacity-70 shadow-lg">
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
                /*         onChange={(e) => handleImage(e)} */
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
                Reward:{" "}
                {errors.reward && (
                  <p className="font-bold text-sm text-red-700 text-center p-2">
                    {errors.reward}
                  </p>
                )}
              </label>
              <input
                type="text"
                name="reward"
                value={input.reward}
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
                Crear
              </button>
            </div>
          </form>

          <Link to="/home">
            <button className="py-2 px-4 w-full bg-yellow-900 hover:bg-yellow-900 focus:ring-yellow-900 focus:ring-offset-yellow-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
