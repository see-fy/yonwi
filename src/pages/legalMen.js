import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function LegalPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Mentions légales
        </h1>
        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">
            Informations sur l'éditeur
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Nom de l'entreprise : Yonwi
          </p>
          <p className="mt-1 text-base text-gray-500">
            Adresse : 69 Rue des keur Gorgui, 11500 Dakar
          </p>
          <p className="mt-1 text-base text-gray-500">
            Téléphone : 221770070007
          </p>
          <p className="mt-1 text-base text-gray-500">
            Email : yonwiavenir@gmail.com
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Conditions d'utilisation
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Les présentes conditions d'utilisation régissent votre utilisation
            du site web de Yonwi Corporation. En accédant ou en utilisant ce
            site web, vous acceptez ces conditions d'utilisation dans leur
            intégralité. Si vous n'acceptez pas ces conditions d'utilisation,
            vous ne pouvez pas utiliser le site web.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Politique de confidentialité
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Yonwi ne s'engage pas à protéger votre vie privée en ligne. Veuillez
            consulter notre politique de confidentialité pour comprendre comment
            nous collectons, utilisons et protégeons les données personnelles
            que vous nous fournissez.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
