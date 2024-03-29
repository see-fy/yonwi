import React from "react";
import { FaPhone, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";

function Card({
  description,
  phone,
  instagram,
  twitter,
  fullname,
  location,
  experience,
}) {
  return (
    <div className="w-[15rem] sm:w-[24rem]  shadow-xl rounded-xl bg-gray-200  space-y-2">
      <div className="bg-slate-900 bg-gradient-to-b from-slate-900 to-slate-400 h-14 rounded-t-xl"></div>
      <div className="flex flex-col items-center justify-center p-2 rounded-b-xl space-y-3">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="h-10 w-10 rounded-2xl -mt-10"
          />
          <h1 className="font-semibold" style={{ fontSize: "9px" }}>
            {fullname}
          </h1>
          <p className="" style={{ fontSize: "9px" }}>
            #{location}
          </p>
          <p className="" style={{ fontSize: "9px" }}>
            {experience} ans d'expérience
          </p>
        </div>
        <p className="text-xs text-center" style={{ fontSize: "10px" }}>
          {description}
        </p>
        <div className="grid grid-cols-4 my-1 gap-4">
          <a
            href={`https://api.whatsapp.com/send?phone=${phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="cursor-pointer" size={16} />
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
            <FaPhone className="cursor-pointer" size={16} />
            <i class="fas fa-phone"></i>
          </a>
          <a
            href={`https://www.twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="cursor-pointer" size={16} />
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="cursor-pointer" size={16} />
            <i class="fab fa-instagram"> </i>
          </a>
        </div>
        <h1 className="flex  font-semibold p-2 text-center text-xs text-white rounded-md  cursor-pointer  bg-slate-900 shadow-lg">
          <span className="mr-2">Soutenir yonwi</span>
          <RiHandCoinFill size={16} color="yellow" />
        </h1>
      </div>
    </div>
  );
}

export default Card;
