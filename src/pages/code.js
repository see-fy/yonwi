import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../styles/index.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
// import data from "../data.js";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Code() {
  const user = useSelector(selectUser);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      unsub = onSnapshot(
        query(collection(db, "users"), where("type", "==", "enseignant")),
        (snapshot) => {
          setProfiles(
            snapshot.docs
              //.filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );
    };
    fetchCards();
    return unsub;
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []); // Run the effect only once

  const handleKeyDown = (event) => {
    if (event.keyCode === 39) {
      swiperRef.current.swiper.slideNext();
    }
    if (event.keyCode === 37) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === 37 && currentIndex > 0) {
        setCurrentIndex((c) => c - 1);
      } else if (e.keyCode === 39 && currentIndex < profiles.length - 1) {
        setCurrentIndex((c) => c + 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentIndex, profiles.length]);

  return (
    <div className=" mx-auto flex flex-col justify-center items-center">
      <Header isLogged={user ? "true" : "false"} />
      <div className=" flex justify-around items-center w-full h-[45rem] bg-slate-900 bg-gradient-to-b from-yellow-900 to-slate-400  py-4 px-10">
        <div className="w-1/2 ml-10">
          <h1 className="text-2xl md:text-5xl max-w-xl font-bold mt-2 mb-8 text-white">
            Obtenez le Code de la route à 1000 Fcfa
          </h1>
          <p className="text-xs md:text-sm font-semibold my-6 text-white">
            Pas que, mais aussi près de 2000 questions pour réviser votre examen
            du code!
          </p>

          <p className="text-xs md:text-sm font-semibold my-6 text-white">
            Entraînez-vous n’importe où et n’importe quand en illimité
          </p>
          <p className="text-xs md:text-sm font-semibold my-6 text-white">
            Une équipe pédagogique prête à accompagner votre réussite
          </p>
          <p className="text-xs md:text-sm font-semibold my-6 text-white">
            Dossier de pré-inscription au fichier national du permis
          </p>
          <div className="mt-10">
            <h1 className="mb-2 mt-6 font-bold p-2 text-center rounded-sm text-xs md:text-sm w-[10rem] md:w-[16rem] cursor-pointer  bg-white shadow-lg">
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
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl max-w-2xl pt-10">
          Trouvez un prof pour apprendre le code afin de consolider vos
          conaissances
        </h1>
        <div
          className={`container mt-10 mb-20 p-10 bg-gradient-to-t from-slate-900 to-slate-100 rounded-md shadow-2xl`}
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 468 ? 2 : "4"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
            initialSlide={3}
            className="mySwiper"
            ref={swiperRef}
          >
            {profiles.map(
              ({
                bio,
                phone,
                insta,
                twitter,
                name,
                location,
                exp,
              }) => {
                return (
                  <SwiperSlide key={Math.random() + "znvùribnzùip"}>
                    <Card
                      description={bio}
                      twitter={twitter}
                      instagram={insta}
                      phone={phone}
                      fullname={name}
                      location={location}
                      experience={exp}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Code;
