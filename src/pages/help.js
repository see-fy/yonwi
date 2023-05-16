import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function AidePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Besoin d'aide ?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nous sommes là pour vous aider
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Si vous avez des questions ou des problèmes avec notre service,
            veuillez consulter les réponses aux questions fréquemment posées
            ci-dessous ou contacter notre équipe d'assistance à la clientèle.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Comment puis-je créer un compte ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Pour créer un compte, veuillez cliquer sur le bouton
                "S'inscrire" en haut de la page d'accueil et remplir le
                formulaire d'inscription.
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Comment puis-je réinitialiser mon mot de passe ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Pour réinitialiser votre mot de passe, veuillez cliquer sur le
                lien "Mot de passe oublié ?" sur la page de connexion et suivre
                les instructions pour réinitialiser votre mot de passe.
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Comment puis-je contacter l'équipe d'assistance ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Vous pouvez contacter notre équipe d'assistance à tout moment en
                envoyant un e-mail à [adresse e-mail de l'assistance clientèle].
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Comment puis-je annuler mon abonnement ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Pour annuler votre abonnement, veuillez vous connecter à votre
                compte et cliquer sur le lien "Annuler l'abonnement" dans les
                paramètres de votre compte.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AidePage;
