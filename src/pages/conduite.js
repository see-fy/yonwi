import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Card from "../components/Card";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
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
    <div className="mx-auto flex flex-col justify-center items-center">
      <Header isLogged={user ? "true" : "false"} />
      <div className=" flex justify-around items-center w-full h-[45rem] bg-slate-900 bg-gradient-to-b from-red-900 to-slate-400">
        <div className="w-1/2 flex iteems-center justify-center">
          <img
            src="https://assets.ornikar.com/learner-app/static/media/packshot-driving-2.ec75bcce.svg"
            alt=""
            className="w-96 h-96"
          />
        </div>
        <div className="container mx-auto my-2 w-1/2">
          <h1 className="font-bold text-2xl md:text-4xl  mb-6 text-white">
            Bienvenu(e) Tahmaris sur Yonwi
          </h1>
          <h1 className="font-bold text-sm md:text-xl  mb-4 text-white">
            Réservez un rendez-vous à votre disponibilité
          </h1>
          <h1 className="text-xs md:text-lg  my-4 text-white max-w-lg">
            Défilez en bas pour trouver un conducteur qui va vous initier à la
            conduite. Si vous ne trouvez pas de conducteur disponible faites un
            tour sur notre chaine youtube pour en savoir un plus sur la conduite
            en attendant que des conducteurs soient disponibles pour commenccer
            à pratiquer la conduite.
          </h1>
          <div className="mt-10">
            <h1 className=" my-6 font-bold p-2 text-center rounded-sm w-[10rem] text-xs md:text-sm  md:w-[16rem] cursor-pointer  bg-white shadow-lg">
              Voir notre chaine youtube
            </h1>
          </div>
          <h1 className="text-white">Suivez nous sur les réseaux sociaux</h1>
          <div className="flex space-x-8 mt-4 max-w-xs">
            <a
              href="https://www.facebook.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-facebook"></i>
            </a>

            <a
              href="https://twitter.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={14} color="white" />
              <i class="fab fa-instagram"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl max-w-2xl mb-10 pt-10">
          Trouvez un conducteur pour anticiper la conduite afin de mieux passer
          l'examen...
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
                  <SwiperSlide key={Math.random() + "zorhzbvpbin"}>
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
