import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function ContactPage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Header isLogged={user ? "true" : "false"} />

      <div className="bg-gray-100 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Contactez-nous
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Nous joindre
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous avez des questions ou des commentaires, n'hésitez pas à
                nous contacter. Nous sommes toujours heureux de recevoir des
                nouvelles de nos clients.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  Courriel:{" "}
                  <a href="mailto:contact@monsite.com">yonwiavenir@gmail.com</a>
                </li>
                <li>Téléphone: (221) 77007-0007</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Formulaire de contact
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="nom"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nom complet:
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Entrez votre nom complet"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="courriel"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Courriel:
                  </label>
                  <input
                    type="email"
                    id="courriel"
                    name="courriel"
                    placeholder="Entrez votre adresse courriel"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Entrez votre message ici"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
