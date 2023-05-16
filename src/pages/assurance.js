import React from "react";
import carImage from "../assets/ban_2.png"; // Importer une image de voiture pour illustrer la page
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

const AssuranceAutoPage = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />
      <div className="bg-gray-100 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-semibold mb-4 text-gray-800">
                Assurance Auto
              </h1>
              <p className="text-gray-600 mb-8">
                Bienvenue sur la page d'assurance auto de notre site web. Nous
                vous proposons une gamme complète d'options d'assurance pour
                vous protéger et vous assurer une conduite en toute
                tranquillité.
              </p>
              <div className="flex items-center mb-6">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 0 1 .12 1.993L11 8v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1.71-.71l2.59 2.59a1 1 0 0 1 .3.71V8z"
                  />
                </svg>
                <p className="text-gray-700">
                  Assurance Responsabilité Civile incluse
                </p>
              </div>
              <div className="flex items-center mb-6">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1V6a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1h1zm2 2h-1v6H3V10H2v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8zm-4-4a4 4 0 0 0-8 0v1h8V6zm-6 0a2 2 0 1 1 4 0v1h-4V6z"
                  />
                </svg>
                <p className="text-gray-700">
                  Assurance Tous Risques en option
                </p>
              </div>
              <a
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold
              px-6 py-3 rounded-md inline-block uppercase tracking-wider transition duration-200 ease-in-out"
              >
                Contactez-nous pour un devis
              </a>
            </div>
            <div>
              <img
                src={carImage}
                alt="Voiture"
                className="w-full md:max-w-md mx-auto pt-10"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Pourquoi choisir notre assurance auto
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 0 1 .12 1.993L11 8v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1.71-.71l2.59 2.59a1 1 0 0 1 .3.71V8z"
                  />
                </svg>
                <p className="text-gray-700">
                  Large couverture pour les dommages matériels et corporels
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1V6a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1h1zm2 2h-1v6H3V10H2v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8zm-4-4a4 4 0 0 0-8 0v1h8V6zm-6 0a2 2 0 1 1 4 0v1h-4V6z"
                  />
                </svg>
                <p className="text-gray-700">
                  Assistance routière 24/7 incluse
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3h3a2 2 0 0 1 2 2v9.586l-.293-.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1
0 0 1-1.414 0L9 14.414V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a2 2 0 0 1 2-2zm10.293 1.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L15.414 9H19a1 1 0 0 0 0-2h-3.586l1.293-1.293a1 1 0 0 0 0-1.414zM14 15a2 2 0 1 1 4 0v1h-4v-1z"
                  />
                </svg>
                <p className="text-gray-700">
                  Service clientèle dédié et réactif
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.168 4.757a6 6 0 1 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414l-2.828-2.828zM6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm14 4a2 2 0 0 0-2-2h-2.414l-.293-.293a1 1 0 0 0-1.414 0L13.414 12H11a1 1 0 0 0 0 2h2.586l-1.293 1.293a1 1 0 0 0 0 1.414l.293.293V18a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.707.707l.293.293H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2z"
                  />
                </svg>
                <p className="text-gray-700">
                  Options personnalisables pour s'adapter à vos besoins
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AssuranceAutoPage;
