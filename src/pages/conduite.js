import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Card from "../components/Card";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Code() {
  const user = useSelector(selectUser);


  return (
    <div className="space-y-4 py-10  mx-auto flex flex-col justify-center items-center">
      <Header isLogged={user ? "true" : "false"} />
      <div className=" flex justify-around items-center w-full h-[33rem] bg-slate-900 bg-gradient-to-b from-red-900 to-slate-400">
        <div className="w-1/2 flex iteems-center justify-center">
          <img
            src="https://assets.ornikar.com/learner-app/static/media/packshot-driving-2.ec75bcce.svg"
            alt=""
            className="w-96 h-96"
          />
        </div>
        <div className="container mx-auto my-2 w-1/2">
          <h1 className="font-bold text-4xl  mb-6 text-white">
            Bienvenu(e) Tahmaris sur Yonwi
          </h1>
          <h1 className="font-bold text-xl  mb-4 text-white">
            Réservez un rendez-vous à votre disponibilité
          </h1>
          <h1 className="text-lg  my-4 text-white max-w-lg">
            Défilez en bas pour trouver un conducteur qui va vous initier à la
            conduite. Si vous ne trouvez pas de conducteur disponible faites un
            tour sur notre chaine youtube pour en savoir un plus sur la conduite
            en attendant que des conducteurs soient disponibles pour commenccer
            à pratiquer la conduite.
          </h1>
          <div className="mt-10">
            <h1 className=" my-6 font-bold p-2 text-center rounded-sm w-[16rem] cursor-pointer  bg-white shadow-lg">
              Voir notre chaine youtube
            </h1>
          </div>
          <h1 className="text-white">Suivez nous sur les réseaux sociaux</h1>
          <div className="flex space-x-8 mt-4 max-w-xs">
            <a
              href="https://www.facebook.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-facebook"></i>
            </a>

            <a
              href="https://twitter.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-instagram"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl max-w-2xl mb-10">
          Trouvez un conducteur pour anticiper la conduite afin de mieux passer
          l'examen...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Code;
