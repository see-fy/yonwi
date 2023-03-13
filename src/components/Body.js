import React from "react";
import { useNavigate } from "react-router-dom"; 

function Body() {
  const navigate = useNavigate();
  const renderCard = (title, url, des) => {
    return (
      <div className="flex flex-col items-center justify-center max-w-xs">
        <img
          src={url}
          alt=""
          className="h-[22rem]  w-[16rem] rounded-lg shadow-lg mb-4"
        />
        <h1 onClick={() => navigate(`/${title.split(" ")[2]}`)} className="mb-2 font-bold p-2 text-center rounded-sm w-[16rem] cursor-pointer  bg-white shadow-lg">
          {title}👉
        </h1>
        <p className="text-xs text-center max-w-xs">{des}</p>
      </div>
    );
  };
  return (
    <div>
      <div
        className="bg-wheat-400 w-full h-screen py-12 px-20"
        style={{ backgroundColor: "wheat" }}
      >
        <div className="flex items-center justify-between">
          <div className="grid grid-rows-3 my-10 max-w-fit md:max-w-lg lg:max-w-2xl">
            <div className="">
              <h1 className="text-4xl lg:text-7xl font-extrabold">Yonwi</h1>
              <h4 className="text-lg max-w-sm lg:max-w-md mt-3 font-semibold">
                Chez Yonwi, vous prenez de l’avance avant de passer le code et
                commencer à pratiquer la conduite. Et ce n'est pas tout on vous met en contact avec les meilleurs assurances
              </h4>
            </div>
            <div className="h-2"></div>
            <img
              src={require("../assets/ban_1.png")}
              alt=""
              className="object-contain -mt-14 max-w-sm md:max-w-lg"
            />
          </div>
          <img
            src={require("../assets/ban_2.png")}
            alt=""
            className="object-fit h-[26rem] lg:h-[34rem] pb-10 hidden sm:inline"
          />
        </div>
      </div>

      <div
        className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-200"
        // style={{ backgroundColor: "whitesmoke" }}
      >
        <h1 className="text-center text-4xl mb-10 font-bold max-w-5xl">
          Avec Yonwi votre préparation au permis en trois étapes, commencez par
          celui qui répond à vos besoins
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {renderCard(
            "Anticiper le code",
            "https://images.unsplash.com/photo-1520176063594-d95ea81242ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYWZmaWMlMjBsYXdzJTIwc2lnbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "(Afin de faciliter votre expérience, nous vous permettons d’avancer à votre rythme sur la voie de la réussite.          Démarrez votre formation où vous le souhaitez. Profitez de 2 000 questions d’entraînement en ligne à l'heure que....)"
          )}
          {renderCard(
            "Anticiper la conduite",
            "https://images.unsplash.com/photo-1584672202732-1308a6e909cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRyaXZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            "(Révolutionnez le permis à nos côtés quel que soit votre niveau, votre âge, votre situation et vos contraintes.              C'est vous qui choisissez l’heure, l’enseignant et le lieu de RDV. Nous vous accompagnons tout au long de votre formation)"
          )}
          {renderCard(
            "Trouvez une assurance",
            "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwaW5zdXJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "(Nous vous accompagnons tout au long de votre vie de conducteur avec un service d’assurance auto qui vous protège en cas d’imprévu. Réalisez une première estimation de votre tarif en moins de 30 secondes grâce....)"
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
