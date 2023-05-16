import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function EspacePressePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="bg-gray-100 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Espace presse
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Dernières actualités
              </h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Nouveau partenariat avec l'association XYZ</li>
                <li>Interview de notre CEO dans Le Monde</li>
                <li>Lancement de notre nouvelle application mobile</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact presse
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute demande de presse ou d'interview, veuillez contacter
                notre service de presse à l'adresse suivante :{" "}
                <a
                  href="mailto:presse@monentreprise.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  yonwiavenir@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ressources presse
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                Kit de presse : téléchargez nos logos, images et autres
                ressources pour vos articles.
              </li>
              <li>
                Communiqués de presse : retrouvez nos communiqués de presse les
                plus récents.
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="/ressources-presse"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Voir les ressources presse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EspacePressePage;
