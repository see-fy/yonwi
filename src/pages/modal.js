import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { doc, serverTimestamp, setDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

Modal.setAppElement("#root");

const ModalPop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const phoneRef = useRef(null);
  const nameRef = useRef(null);
  const twitterRef = useRef(null);
  const emailRef = useRef(null);
  const instaRef = useRef(null);
  const bioRef = useRef(null);
  const typeRef = useRef(null);
  const expRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (snapshot.exists()) {
          navigate("/");
        }
      }),
    [navigate, user.uid]
  );

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const editProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      name: nameRef.current.value,
      twitter: twitterRef.current.value,
      email: emailRef.current.value || user.email,
      bio: bioRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
      exp: expRef.current.value,
      type: typeRef.current.value,
      insta: instaRef.current.value,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        setIsOpen(false);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="items-center justify-center flex flex-col py-10">
      <div className="max-w-lg bg-slate-900 flex flex-col items-center justify-center p-4 rounded">
        <h2 className="text-lg font-bold mb-4 text-white">
          Créer ou mettre à jour votre carte
        </h2>
        <div className=" rounded-lg shadow-lg p-4 settings-section grid grid-cols-2 gap-4">
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom complet
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="insta"
            >
              Nom d'utilisateur Instagram
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="insta"
              type="text"
              name="insta"
              ref={instaRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="eamil"
              name="email"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Numero de telephone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="numeric"
              name="phone"
              ref={phoneRef}
              required
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="location"
            >
              Votre lieu d'opération
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              ref={locationRef}
              required

            />
          </div>
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="twitter"
            >
              Nom d'utilisateur twitter
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="twitter"
              type="text"
              name="twitter"
              ref={twitterRef}
              required

            />
          </div>
          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="exp"
            >
              Experience en année
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="exp"
              type="text"
              name="exp"
              ref={expRef}
              required

            />
          </div>
          <div class="">
          <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="location"
            >
              Vous êtes?
            </label>
           
            <select
              name="type"
              id="type"
              ref={typeRef}
              required
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            >
              <optgroup>
                <option value="enseignant">Enseignant</option>
                <option value="apprenant">Apprenant </option>
                <option value="autres">Autres</option>
              </optgroup>
            </select>
          </div>

          <div className="mb-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="bio"
            >
              Message aux Apprenants
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="bio"
              name="bio"
              ref={bioRef}
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <span className="block w-full rounded-md shadow-sm">
            <button
              onClick={editProfile}
              type="submit"
              className="w-full flex justify-center text-xs py-1 px-4 leading-5 font-medium text-white bg-green-700 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
            >
              Continuer
            </button>
          </span>
        </div>
      </div>

      <button
        onClick={closeModal}
        className="cursor-pointer z-40 absolute top-4 right-4 bg-red-300 p-2 w-14 h-14  rounded-full "
      >
        Fermer
      </button>
    </Modal>
  );
};

export default ModalPop;
