import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function AdsPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-3xl font-extrabold text-gray-900">Publicités</h1>
        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">
            Publicités sur notre site
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Notre site affiche des publicités fournies par des réseaux
            publicitaires tiers. Ces réseaux peuvent collecter des informations
            sur vos visites sur notre site et sur d'autres sites Web afin de
            vous proposer des publicités pertinentes en fonction de vos centres
            d'intérêt. Veuillez consulter la politique de confidentialité de ces
            réseaux pour en savoir plus sur leurs pratiques de collecte et
            d'utilisation de données.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Publicités personnalisées
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Si vous ne souhaitez pas recevoir de publicités personnalisées en
            fonction de vos centres d'intérêt, vous pouvez vous désinscrire des
            annonces ciblées en utilisant les liens fournis dans les publicités.
            Vous pouvez également configurer les paramètres de votre navigateur
            pour bloquer les cookies tiers ou utiliser des outils de
            désinscription tels que l'outil de désinscription de la Digital
            Advertising Alliance (DAA).
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdsPage;
