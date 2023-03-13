import React from "react";
import Header from "../components/Header"; 
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Card from "../components/Card";
  

function Code() {
  const user = useSelector(selectUser);


  return (
    <div className="space-y-4 pt-16 pb-10  mx-auto flex flex-col justify-center items-center">
      <Header isLogged={user ? "true" : "false"} />
      <div className=" flex justify-around items-center w-full h-full bg-slate-900 bg-gradient-to-b from-yellow-900 to-slate-400 pb-2 py-4 px-10">
        <div className="w-1/2 ml-10">
          <h1 className="text-5xl max-w-xl font-bold mt-2 mb-8 text-white">
            Obtenez le Code de la route à 1000 Fcfa
          </h1>
          <p className="text-sm font-semibold my-6 text-white">
            Pas que, mais aussi près de 2000 questions pour réviser votre examen
            du code!
          </p>

          <p className="text-sm font-semibold my-6 text-white">
            Entraînez-vous n’importe où et n’importe quand en illimité
          </p>
          <p className="text-sm font-semibold my-6 text-white">
            Une équipe pédagogique prête à accompagner votre réussite
          </p>
          <p className="text-sm font-semibold my-6 text-white">
            Dossier de pré-inscription au fichier national du permis
          </p>
          <div className="mt-10">
            <h1 className="mb-2 mt-6 font-bold p-2 text-center rounded-sm w-[16rem] cursor-pointer  bg-white shadow-lg">
              Passer au paiement
            </h1>
          </div>
        </div>

        <div className="container mx-auto my-2 w-1/2 max-w-md">
          <img
            src="https://assets.ornikar.com/learner-app/static/media/boy-exam-character.6f330fb0.svg"
            className=""
            alt=""
          />
          <div className="h-4"></div>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl mb-10 max-w-2xl">
          Trouvez un prof pour apprendre le code afin de consolider vos
          conaissances
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Code;
