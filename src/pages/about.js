import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { FaUsers } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import Logo from "../assets/logo.png";

function About() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto py-20 px-5">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src={Logo} alt="Logo" className="h-16 w-16 mb-5" />
              <p className="text-xl mb-3 font-bold">Bienvenue sur Yonwi</p>
              <p className="mb-3">
                Nous sommes une entreprise spécialisée dans la formation et la
                préparation aux examens de conduite. Nous offrons une grande
                variété de cours de conduite pour les débutants et les
                conducteurs expérimentés, ainsi que des cours de rattrapage pour
                les conducteurs ayant perdu leur permis de conduire. Notre
                équipe de professionnels expérimentés se consacre à offrir des
                cours de conduite de qualité, en mettant l'accent sur la
                sécurité routière et le respect des règles de la route.
              </p>
              <p className="mb-3">
                Notre objectif est d'aider nos clients à devenir des conducteurs
                sûrs et responsables, en leur offrant des cours de conduite
                personnalisés et adaptés à leur niveau de compétence. Nous
                sommes convaincus que la conduite est une compétence essentielle
                pour la vie, et nous sommes fiers de jouer un rôle clé dans la
                formation des conducteurs de demain.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="flex items-center mb-5">
                <FaUsers className="text-3xl text-blue-500 mr-3" />
                <p className="font-bold text-xl">Notre équipe</p>
              </div>
              <div className="mb-5">
                <RiTeamFill className="text-2xl text-blue-500 mr-3 inline-block" />
                <p className="inline-block font-bold">Directeur:</p>
                <p className="inline-block ml-3">Yonwi Yonwi</p>
              </div>
              <div className="mb-5">
                <RiTeamFill className="text-2xl text-blue-500 mr-3 inline-block" />
                <p className="inline-block font-bold">Instructeurs:</p>
                <ul className="list-disc ml-6">
                  <li>User un</li>
                  <li>User deux</li>
                  <li>User trois</li>
                </ul>
              </div>
              <div className="mb-5">
                <MdLocationOn className="text-2xl text-blue-500 mr-3 inline-block" />
                <p className="inline-block font-bold">Adresse:</p>
                <p className="inline-block ml-3">
                  69 Cité Keur Gorui, Dakar, SN
                </p>
              </div>
              <div className="mb-5">
                <IoIosCall className="text-2xl text-blue-500 mr-3 inline-block" />
                <p className="inline-block font-bold">Téléphone:</p>
                <p className="inline-block ml-3">(221) 77007-0007</p>
              </div>
              <div className="mb-5">
                <IoMail className="text-2xl text-blue-500 mr-3 inline-block" />
                <p className="inline-block font-bold">Courriel:</p>
                <p className="inline-block ml-3">yonwiavenir@gmail.com</p>
              </div>
              <div className="flex items-center mb-5">
                <p className="font-bold text-xl mr-3">Suivez-nous sur:</p>
                <a href="https://www.facebook.com/yonwi" className="mr-3">
                  <SiFacebook className="text-3xl text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://www.twitter.com/yonwi" className="mr-3">
                  <SiTwitter className="text-3xl text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/yonwi">
                  <SiInstagram className="text-3xl text-blue-500 hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
