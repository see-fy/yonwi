import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function OffresEmploiPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="bg-gray-100 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Offres d'emploi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Développeur Front-End
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous recherchons un développeur front-end pour rejoindre notre
                équipe. Vous serez responsable de la conception et du
                développement de l'interface utilisateur de notre site web, en
                utilisant les technologies modernes telles que React et
                Tailwind.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Expérience avec React et Tailwind</li>
                <li>Bonne compréhension de HTML, CSS et JavaScript</li>
                <li>
                  Capacité à travailler en équipe et à résoudre des problèmes
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="/postuler/developpeur-front-end"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Postuler
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Analyste Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous recherchons un analyste marketing pour rejoindre notre
                équipe. Vous serez responsable de l'analyse des données
                marketing et de la recommandation de stratégies pour améliorer
                les résultats.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Expérience en analyse de données marketing</li>
                <li>
                  Connaissance de Google Analytics et de la publicité en ligne
                </li>
                <li>
                  Capacité à communiquer efficacement les résultats et les
                  recommandations
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="/postuler/analyste-marketing"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Postuler
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffresEmploiPage;
