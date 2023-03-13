import React from "react";
import {
  FaFacebook,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <div class="h-full bg-slate-700 w-full items-center justify-center flex flex-col space-y-16 p-4">
      <div class="lg:flex items-center justify-center mx-auto space-x-16 space-y-4">
        <div>
          <div class="flex space-x-1 mb-2 items-end">
            <img
              src={require("../assets/logo.png")}
              alt="Logo"
              class="rounded-sm h-7 mb-1"
            />
            <h1 class="text-white font-bold text-xl">Yonwi</h1>
          </div>
          <div class="flex flex-col space-y-3">
            <label for="lang" class="text-white">
              Choisir une langue:
            </label>
            <select
              name="lang"
              id="lang"
              class="w-80 rounded-lg h-10 p-1 outline-none cursor-pointer"
            >
              <optgroup>
                <option value="français">Français 🇫🇷 </option>
                <option value="english">English 🇬🇧 </option>
                <option value="spanish">Spanish 🇪🇸 </option>
              </optgroup>
            </select>
          </div>
          <h1 class="text-white font-bold text-xl mt-4">
            {" "}
            Téléchargez l’app !
          </h1>
          <p className="text-white mt-2">
            Disponible gratuitement sur App Store et Google Play
          </p>
          <div className="flex space-x-4 my-4">
            <img
              src="https://happn.com/assets/googleplay.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              src="https://happn.com/assets/appstore.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">Entreprise</h1>
          <p class="text-white text-sm cursor-pointer">A propos</p>
          <p class="text-white text-sm cursor-pointer">Offres d'emploi</p>
          <p class="text-white text-sm cursor-pointer">Contact</p>
          <p class="text-white text-sm cursor-pointer">Espace Presse</p>
          <p class="text-white text-sm cursor-pointer">Publicités</p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white text-2xl font-bold">Utilisateurs </h1>
          <p class="text-white text-sm cursor-pointer">Aide</p>
          <p class="text-white text-sm cursor-pointer">Mentions légales</p>
          <p class="text-white text-sm cursor-pointer">
            Politique de confidentialité
          </p>
          <p class="text-white text-sm cursor-pointer">
            Conditions d'utilisations
          </p>
          <p class="text-white text-sm cursor-pointer">Cookies</p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">Réseaux sociaux</h1>
          <div class="flex space-x-10">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook class="h-4 w-4 text-white cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram class="h-4 w-4 text-white cursor-pointer" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter class="h-4 w-4 text-white cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaYoutube class="h-4 w-4 text-white cursor-pointer" />
            </a>
          </div>
          <p class="text-white text-sm h-5"></p>
          <p class="text-white text-sm h-5"></p>
          <p class="text-white text-sm h-5"></p>
          <p class="text-white text-sm h-5"></p>
        </div>
      </div>
      <div class="h-1 bg-slate-500 opacity-60 w-full mx-auto justify-center items-center"></div>
      <div class="lg:flex lg:space-x-8 items-center justify-center">
        <div className="flex items-center justify-center space-x-3">
          <HiMail class="text-white cursor-pointer" size={26} />
          <FaPhone class="text-white cursor-pointer" size={20} />
        </div>

        <p class="text-white cursor-pointer text-xs">
          Cité keur Gorgui, Dakar, Sénégal
        </p>
        <p class="text-white cursor-pointer text-xs">
          @ 2023 Yonwi Corporation Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
