import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function ConditionsPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Conditions d'utilisation
        </h1>
        <div className="mt-6">
          <p className="text-base text-gray-500">
            Veuillez lire attentivement les présentes conditions d'utilisation
            ("Conditions") avant d'utiliser ce site Web (le "Site"). En
            utilisant le Site, vous acceptez ces Conditions dans leur
            intégralité. Si vous n'acceptez pas ces Conditions, veuillez ne pas
            utiliser le Site.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Propriété intellectuelle
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Le contenu du Site, y compris, mais sans s'y limiter, le texte, les
            graphiques, les images, les logos, les icônes de boutons, les images
            de boutons, les fichiers audio, les logiciels et autres contenus
            (collectivement, "Contenu"), est la propriété de notre société ou de
            nos concédants de licence et est protégé par les lois de propriété
            intellectuelle applicables.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Utilisation du Site
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Vous êtes autorisé à utiliser le Site uniquement à des fins légales
            et conformément aux présentes Conditions. Vous ne pouvez pas
            utiliser le Site de manière à violer les lois, règlements ou droits
            légaux de tiers. Vous ne pouvez pas accéder ou utiliser le Site à
            des fins commerciales sans notre autorisation écrite préalable.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Exclusion de garanties
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Le Site et le contenu sont fournis "tels quels" et sans garantie
            d'aucune sorte, expresse ou implicite. Dans toute la mesure permise
            par la loi, nous déclinons toute garantie, expresse ou implicite, y
            compris, mais sans s'y limiter, les garanties implicites de qualité
            marchande, d'adéquation à un usage particulier et de
            non-contrefaçon.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Limitation de responsabilité
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Dans toute la mesure permise par la loi, nous ne serons pas
            responsables envers vous ou tout tiers pour tout dommage direct,
            indirect, spécial, fortuit, exemplaire ou punitif découlant de votre
            accès ou utilisation du Site ou de tout contenu, même si nous avons
            été informés de la possibilité de tels dommages.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Modifications des Conditions
          </h2>
          <p className="mt-3 text-base text-gray-900">
            Nous nous réservons le droit de modifier les présentes Conditions à
            tout moment et sans préavis en affichant la version mise à jour sur
            le Site. Il est de votre responsabilité de vérifier régulièrement
            les présentes Conditions pour vous assurer que vous êtes en accord
            avec celles-ci. Votre utilisation continue du Site après l'affichage
            des Conditions mises à jour constitue votre acceptation des
            modifications.
          </p>
          <h2 className="mt-8 text-lg font-medium text-gray-900">
            Contactez-nous
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Si vous avez des questions concernant ces Conditions, veuillez nous
            contacter à l'adresse e-mail suivante : [yonwiavenir@gmail.com].
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConditionsPage;
