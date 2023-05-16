import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

const PrivacyPolicy = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="bg-gray-100 min-h-screen py-24">
        <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Politique de confidentialité
          </h1>
          <div className="mt-6 prose prose-gray prose-lg">
            <p>
              Chez Yonwi, nous prenons la confidentialité de vos données
              personnelles très au sérieux. Nous nous engageons à protéger et à
              respecter votre vie privée conformément aux lois applicables en
              matière de protection des données personnelles.
            </p>
            <h2>Collecte de données personnelles</h2>
            <p>
              Nous collectons les données personnelles que vous nous fournissez
              directement, par exemple lorsque vous créez un compte ou lorsque
              vous nous contactez. Ces données peuvent inclure votre nom, votre
              adresse e-mail, votre adresse postale et votre numéro de
              téléphone.
            </p>
            <h2>Utilisation des données personnelles</h2>
            <p>
              Nous utilisons les données personnelles que nous collectons pour
              fournir, maintenir, protéger et améliorer nos services. Nous ne
              vendons jamais vos données personnelles à des tiers.
            </p>
            <h2>Cookies</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur
              notre site web. Vous pouvez configurer votre navigateur pour
              bloquer les cookies, mais cela peut affecter la façon dont vous
              utilisez notre site.
            </p>
            <h2>Modification de notre politique de confidentialité</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de
              temps à autre. Si nous apportons des modifications importantes,
              nous vous en informerons par e-mail ou via une notification sur
              notre site web.
            </p>
            <h2>Comment nous contacter</h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant notre
              politique de confidentialité, veuillez nous contacter à l'adresse
              suivante : [yonwiavenir@gmail.com].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
