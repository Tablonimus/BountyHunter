import React, { useLayoutEffect, useRef } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getAllPets, postPet, postImage } from "../redux/Actions/index.js";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { notificationSwal } from "./notificationSwal.jsx";
// import MapboxAutocomplete from "react-mapbox-autocomplete";
// import mapboxgl from "mapbox-gl";
import NavBarHome from "../NavBar/NavBarHome.jsx";
import axios from "axios";

export default function RegisterPet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     return () => {
  //       dispatch(getAllPets());
  //     };
  //   });

  const id = localStorage.getItem("id");
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");
  const [imagePool, setImagePool] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingImagePool, setLoadingImagePool] = useState(false);
  const [placeSelect, setPlaceSelect] = useState(false);

  const mapDiv = useRef(null);

  const [input, setInput] = useState({
    id: id,
    name: "",
    image: "",
    imagePool: [],
    type: "",
    description: "",
    size: "",
    age: "",
    vaccination: "",
    castrated: false,
    gender: "",
    place: "",
    place_longitude: "",
    place_latitude: "",
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

  //   async function handleImage(e) {
  //     const files = e.target.files;
  //     const data = new FormData();
  //     data.append("file", files[0]);
  //     data.append("upload_preset", "pretty");
  //     data.append("folder", "Images");
  //     setLoadingImage(true);
  //     dispatch(postImage(data)).then((e) => {
  //       setImage(e.payload);
  //       setInput({
  //         ...input,
  //         image: e.payload,
  //       });
  //       setErrors(
  //         validate({
  //           ...input,
  //           image: e.payload,
  //         })
  //       );
  //       setLoadingImage(false);
  //     });
  //   }

  //   async function handleImagePool(e) {
  //     const files = e.target.files;
  //     const data = new FormData();
  //     data.append("file", files[0]);
  //     data.append("upload_preset", "pretty");
  //     data.append("folder", "Images");
  //     setLoadingImagePool(true);
  //     dispatch(postImage(data)).then((e) => {
  //       setImagePool(e.payload);
  //       setInput({
  //         ...input,
  //         imagePool: [...input.imagePool, e.payload],
  //       });
  //       setErrors(
  //         validate({
  //           ...input,
  //           imagePool: [...input.imagePool, e.payload],
  //         })
  //       );
  //       setLoadingImagePool(false);
  //     });
  //   }

  function validate(input) {
    let errors = {};

    if (!input.id) errors.id = "El id es requerido!";

    if (input.name) {
      if (!/^[a-zA-Z\s]+$/.test(input.name)) {
        errors.name = "El nombre sólo puede tener letras!";
      } else if (input.name.length > 20) {
        errors.name = "El nombre no puede tener más de 20 caracteres!";
      }
    } else errors.name = "El nombre es requerido!";

    if (!input.image) errors.image = "La imagen es requerida!";

    if (!input.type) errors.type = "El tipo de mascota es requerido!";

    if (!input.size) errors.size = "El tamaño es requerido!";

    if (input.age) {
      if (isNaN(input.age)) errors.age = "Sólo se permiten números";
      if (/[  +]$/.test(input.age)) errors.age = "Sólo se permiten números";
      if (!Number.isInteger(Number(input.age)))
        errors.age = "Sólo se permiten números enteros";
      if (parseInt(input.age) < 0 || parseInt(input.age) > 25)
        errors.age = "La edad debe ser entre 0 y 25 años";
    } else errors.age = "La edad es requerida!";

    if (!input.vaccination)
      errors.vaccination = "La información sobre vacunas es requerida!";

    if (!input.gender)
      errors.gender = "La información sobre castración es requerida!";

    // if (input.place) {
    //   if (input.place.length > 50) {
    //     errors.place = "La ubicación no puede tener más de 50 caracteres!";
    //   }
    // } else errors.place = "La ubicación es requerida!";

    return errors;
  }

  const have = () => {
    if (
      errors.id ||
      errors.name ||
      errors.image ||
      errors.type ||
      errors.size ||
      errors.age ||
      errors.vaccination ||
      errors.gender ||
      errors.place
    ) {
      return true;
    } else if (
      input.id &&
      input.name &&
      input.image &&
      input.type &&
      input.size &&
      input.age &&
      input.vaccination &&
      input.gender &&
      input.place
    ) {
      return false;
    } else {
      return "e";
    }
  };

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

  function handleDelete(event) {
    setInput({
      ...input,
      imagePool: input.imagePool.filter((e) => e !== event),
    });
    setErrors(
      validate({
        ...input,
        imagePool: input.imagePool.filter((e) => e !== event),
      })
    );
  }

  let key = 0;
  function addKey() {
    return key++;
  }

  //   function _suggestionSelect(result, lat, long) {
  //     setInput({
  //       ...input,
  //       place: result,
  //       place_longitude: long,
  //       place_latitude: lat,
  //     });
  //     setPlaceSelect(true);
  //     createNewMap(long, lat);
  //   }
  //   const mapAccess = {
  //     mapboxApiAccessToken:
  //       "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w",
  //   };

  //   useLayoutEffect(() => {
  //     //if (placeSelect)
  //     createNewMap(input.place_longitude, input.place_latitude);
  //   }, [placeSelect]);

  //   function createNewMap(long, lat) {
  //     if (placeSelect) {
  //       new mapboxgl.Map({
  //         container: mapDiv.current, // container ID
  //         style: "mapbox://styles/mapbox/streets-v11", // style URL
  //         center: [long, lat], // starting position [lng, lat]
  //         zoom: 12, // starting zoom
  //         projection: "globe", // display the map as a 3D globe
  //       });
  //     }
  //   }
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoicG9saW5vIiwiYSI6ImNsN2FtdWNybTB0bmk0MHNqZXZxMzM0OTYifQ.O2Y9sZnF-K1k_KhC8MzJbA";

  return (
    <div>
      <NavBarHome />
      <div className="flex flex-col w-full mt-15 m-auto py-8 rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-1 mt-14 text-xl font-normal text-white sm:text-2xl">
          New Expedient
        </div>

        <div className="mt-8 px-8 max-w-lg self-center">
          <form /* onSubmit={handleSubmit} */>
            <div>
              <label className="font-light text-white text-xl">Title:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                placeholder="Name or crime..."
                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent"
              />
              {errors.name && (
                <p className="font-bold text-red-700 text-center p-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <fieldset onChange={(e) => handleChange(e)}>
                <legend className="font-light text-white text-xl">
                  Person Classification:
                </legend>
                <span className="p-3">
                  <input
                    type="radio"
                    name="classification"
                    value="main"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Main</label>
                </span>
                <span className="p-3">
                  <input
                    type="radio"
                    name="classification"
                    value="Victim"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Victim
                  </label>
                </span>
                <span className="p-3">
                  <input
                    type="radio"
                    name="classification"
                    value="unknown"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Unknown
                  </label>
                </span>
              </fieldset>
              {errors.gender && (
                <p className="font-bold text-red-700 text-center p-2">
                  {errors.gender}
                </p>
              )}
            </div>
            <div>
              <fieldset onChange={(e) => handleChange(e)}>
                <legend className="font-light text-white text-xl">
                  Gender:
                </legend>
                <span className="p-3">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">
                    Female
                  </label>
                </span>
                <span className="p-3">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Male</label>
                </span>
                <span className="p-3">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="w-4 h-4 mx-4 text-yellow-600 bg-white ring-1 ring-yellow-900  focus:ring-yellow-900"
                  />
                  <label className="font-light text-white text-xl">Other</label>
                </span>
              </fieldset>
              {errors.gender && (
                <p className="font-bold text-red-700 text-center p-2">
                  {errors.gender}
                </p>
              )}
            </div>

            <div>
              <label className="font-light text-white text-xl">Image:</label>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                /*         onChange={(e) => handleImage(e)} */
                className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              {loadingImage ? (
                <h3 className="font-light text-white text-xl self-center">
                  Loading Image...
                </h3>
              ) : (
                <img src={image} alt="" className="max-w-xs" />
              )}
              {errors.image && (
                <p className="font-bold text-red-700 text-center p-2">
                  {errors.image}
                </p>
              )}
            </div>

            <div>
              <label className="font-light text-white text-xl">Subjects:</label>
              <textarea
                name="description"
                maxLength="255"
                value={input.description}
                placeholder="Type here the crime's title commited..."
                onChange={(e) => handleChange(e)}
                className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="font-light text-white text-xl">Reward:</label>
              <input
                type="text"
                name="age"
                value={input.age}
                onChange={(e) => handleChange(e)}
                placeholder="$...."
                className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-transparent"
              />
              {errors.age && (
                <p className="font-bold text-red-700 text-center p-2">
                  {errors.age}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="py-2 px-4 my-4 w-full bg-yellow-900 hover:bg-yellow-900 focus:ring-yellow-900 focus:ring-offset-yellow-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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
