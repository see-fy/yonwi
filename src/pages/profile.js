import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import {
  doc,
  onSnapshot,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const phoneRef = useRef(null);
  const nameRef = useRef(null);
  const twitterRef = useRef(null);
  const emailRef = useRef(null);
  const instaRef = useRef(null);
  const bioRef = useRef(null);
  const typeRef = useRef(null);
  const expRef = useRef(null);
  const locationRef = useRef(null);
  const [showCard, setShowCard] = useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.data());
          console.log("Document data:", snapshot.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }),
    [user.uid]
  );

  const editProfile = () => {
    updateDoc(doc(db, "users", user.uid), {
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
        console.log("Updated...");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  flex flex-col  items-center justify-around bg-black">
      <div className=" pt-5">
        <h1 className="text-white text-2xl md:text-5xl mb-4 ml-2">
          Editer votre Profile
        </h1>
        <div className="h-1 w-full bg-gray-900 -mb-5" />
        <div className="flex flex-col justify-center items-center mx-2 space-x-4">
          <div className="flex items-center justify-center space-x-4 py-1 mt-2 w-96">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              className="h-20 w-20  rounded-3xl cursor-pointer"
              alt=""
            />
            <div className="space-y-4 w-96">
              <h1 className="text-white  bg-gray-800 p-3 mb-2 mt-6 w-full max-w-xl">
                {user.email}
              </h1>
              <p className="text-white font-bold text-lg mb-1 mt-4 ">
                {user.name}
              </p>
            </div>
          </div>

          <div className="mt-4">
            
              <div className="h-1 w-96 bg-gray-900 -mb-2 " />
           
            <div className="w-96">
              <h1 className="text-white -mb-4 mt-6">
                Dernière modification: 04/04/2024
                {/* {profile.timestamp.toDate()} */}
              </h1>

              <div className="flex items-center justify-between my-8 w-full space-x-14">
                <div>
                  <h1 className="font-bold text-white text-sm">
                    Modification de la carte
                  </h1>
                  <p className="text-white text-xs mt-1">
                    Enseignant seulement
                  </p>
                </div>
                <button
                  onClick={() => setShowCard(!showCard)}
                  className={`p-2 w-40  text-white rounded font-semibold  ${"bg-green-600 cursor-pointer"}`}
                >
                  {!showCard ? "Modifier Carte" : "Annuler"}
                </button>
              </div>
              <div className="flex items-center  justify-between my-8 w-full space-x-14">
                <div>
                  <h1 className="font-bold text-white text-sm">
                    Suppression de la carte
                  </h1>
                  <p className="text-white text-xs mt-1">Arrêt de service</p>
                </div>
                <button
                  className={`p-2 w-40  text-white rounded font-semibold ${"bg-red-600 cursor-pointer"}`}
                >
                  Supprimer Carte
                </button>
              </div>
              <div className="flex items-center justify-between my-8 w-full space-x-14">
                <div>
                  <h1 className="font-bold text-white text-sm">
                    Retour à l'accueil
                  </h1>
                  <p className="text-white text-xs mt-1">Page principale</p>
                </div>
                <button
                  className={`p-2 w-40  text-white rounded font-semibold ${"bg-slate-600 cursor-pointer"}`}
                  onClick={() => navigate("/")}
                >
                  Accueil
                </button>
              </div>
            </div>
            <div className="space-y-4 -mb-4">
              <button
                onClick={logout}
                className="w-full p-2 rounded bg-red-600 cursor-pointer text-white font-semibold"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 flex  items-center justify-center pt-10">
        {showCard && (
          <div className="max-w-lg bg-slate-900 flex flex-col items-center justify-center p-4">
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
                  defaultValue={profile.name}
                  ref={nameRef}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="insta"
                >
                  Nom d'utilisateur Insta
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="insta"
                  type="text"
                  name="insta"
                  defaultValue={profile.insta}
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
                  defaultValue={profile.email}
                  ref={emailRef}
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
                  defaultValue={profile.phone}
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
                  defaultValue={profile.location}
                  ref={locationRef}
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
                  defaultValue={profile.twitter}
                  ref={twitterRef}
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
                  defaultValue={profile.exp}
                  ref={expRef}
                />
              </div>
              <div class="">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Choisir votre cas
                </label>

                <select
                  name="type"
                  id="type"
                  ref={typeRef}
                  defaultValue={profile.type}
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
                  defaultValue={profile.bio}
                  ref={bioRef}
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
                  Mettre à jour
                </button>
              </span>
            </div>
          </div>
        )}
      </div>
<div className="h-[28rem]"></div>
    </div>
  );
}

export default Profile;
