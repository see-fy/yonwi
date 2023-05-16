import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { motion } from "framer-motion";

const phrases = [
  " Une avance à l'obtention de votre permis",
  "Chez Yonwi, Reviser le code avant l'examen ",
  "Commencer à pratiquer la conduite",
  "Connecter avec les meilleurs assurances",
];

const Snowflake = ({ x, y }) => (
  <motion.div
    style={{
      position: "absolute",
      top: y,
      left: x,
      width: 4,
      height: 4,
      borderRadius: 4,
      backgroundColor: "#fff",
      opacity: 0.8,
    }}
    animate={{
      y: ["100vh", "-10vh"],
      rotate: [0, 360],
      transition: {
        duration: 10,
        delay: Math.random() * 5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    }}
  />
);


function Body() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const cover =
    "https://images.unsplash.com/photo-1473646910415-5bf513680e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcm1pcyUyMGRlJTIwY29uZHVpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetter === phrases[currentPhrase].length) {
        // Si toutes les lettres de la phrase ont été affichées
        setCurrentLetter(0); // Réinitialiser l'index de la lettre
        setCurrentPhrase(
          (currentPhrase) => (currentPhrase + 1) % phrases.length
        );
      } else {
        // Si la phrase n'a pas été entièrement affichée
        setCurrentLetter((currentLetter) => currentLetter + 1); // Passer à la lettre suivante
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentPhrase, currentLetter]);
 const [snowflakes, setSnowflakes] = useState([]);
useEffect(() => {
  const intervalId = setInterval(() => {
    const numOfSnowflakes = 1; // adjust the number of snowflakes here
    const newSnowflakes = Array.from({ length: numOfSnowflakes }, () => ({
      x: Math.random() * window.innerWidth,
      y: -10,
    }));
    setSnowflakes((prevSnowflakes) => [...prevSnowflakes, ...newSnowflakes]);
  }, 500);

  return () => clearInterval(intervalId);
}, []);

  const renderCard = (title, url, des) => {
    return (
      <div className="flex flex-col items-center justify-center max-w-md">
        <img
          src={url}
          alt=""
          className="h-[26rem] w-full  max-w-xs rounded-lg shadow-lg mb-4"
        />
        <h1
          onClick={() => navigate(user ? `/${title.split(" ")[2]}` : "/login")}
          className="mb-2 font-bold p-2 text-center rounded-sm w-[16rem] cursor-pointer  bg-white shadow-lg"
        >
          {title}👉
        </h1>
        <p className="text-xs text-center max-w-xs">{des}</p>
      </div>
    );
  };
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover w-full h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url(" + cover + ")",
        }}
      >
  <div className="w-full h-full absolute">
      {snowflakes.map(({ x, y }, i) => (
        <Snowflake key={i} x={x} y={y}  />
      ))}
    </div>
  
        {phrases.map((phrase, index) => (
          <motion.p
            key={index}
            className="text-scroll__phrase text-white font-extrabold text-2xl md:text-6xl max-w-xs sm:max-w-md lg:max-w-xl  text-center px-2 "
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{ display: index === currentPhrase ? "block" : "none" }}
          >
            {phrase.slice(0, currentLetter)}
          </motion.p>
        ))}
      </div>
      <div
        className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-200"
        // style={{ backgroundColor: "whitesmoke" }}
      >
        <h1 className="text-center text-4xl mb-10 font-bold max-w-5xl">
          Avec Yonwi votre préparation au permis en trois étapes, commencez par
          celui qui répond à vos besoins
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 my-10">
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
