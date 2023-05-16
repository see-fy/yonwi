import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function CookiesPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-gray-900">Cookies</h1>
        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">
            Utilisation des cookies
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Notre site utilise des cookies pour améliorer l'expérience de
            l'utilisateur et pour collecter des informations sur l'utilisation
            du site. Les cookies sont de petits fichiers texte qui sont stockés
            sur votre ordinateur ou votre appareil mobile lorsque vous visitez
            un site Web. Ils permettent au site Web de se souvenir de vos
            actions et préférences (comme la langue que vous avez choisie ou la
            taille du texte) sur une certaine période de temps.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Types de cookies utilisés
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Nous utilisons différents types de cookies sur notre site Web :
          </p>
          <ul className="mt-3 list-disc list-inside text-base text-gray-500">
            <li>
              Cookies de session : ces cookies sont nécessaires au bon
              fonctionnement du site Web et sont supprimés lorsque vous fermez
              votre navigateur.
            </li>
            <li>
              Cookies de préférence : ces cookies sont utilisés pour mémoriser
              vos préférences de site Web, telles que la langue que vous avez
              choisie ou la taille du texte.
            </li>
            <li>
              Cookies de mesure d'audience : ces cookies sont utilisés pour
              collecter des informations sur l'utilisation du site Web, telles
              que le nombre de visiteurs, les pages les plus visitées, etc. Ces
              informations nous aident à améliorer le site Web et à le rendre
              plus facile à utiliser.
            </li>
          </ul>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Contrôle des cookies
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Vous pouvez contrôler l'utilisation des cookies sur notre site Web
            en modifiant les paramètres de votre navigateur. La plupart des
            navigateurs vous permettent de refuser les cookies ou de les
            accepter seulement pour des sites Web spécifiques. Veuillez
            consulter les paramètres de votre navigateur pour en savoir plus sur
            la manière de contrôler les cookies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CookiesPage;
