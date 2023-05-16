import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header({ isLogged }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transistionHeader = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionHeader);
    return () => window.removeEventListener("scroll", transistionHeader);
  }, []);
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        show ? "bg-black" : `bg-slate-900`
      } z-50 w-full max-w-6xl mx-auto opacity-90  h-16 rounded-b-md p-10 top-0 left-0 right-0 ease-in transition-all duration-500 fixed`}
    >
      <div
        className="flex items-end justify-end cursor-pointer space-x-1"
        onClick={() => navigate("/landing")}
      >
        <img
          src={require("../assets/logo.png")}
          alt="Logo"
          className=" rounded-sm h-7 invert"
        />
        <h1 className="text-white font-bold text-xl">Yonwi</h1>
      </div>
      <div className="flex space-x-3 sm:space-x-6">
        <button
          className="text-white outline-none text-center font-bold  p-1 text-xs"
          onClick={() => navigate("/code")}
        >
          Le code
        </button>
        <button
          className="space-x-2 items-center text-white font-bold text-xs"
          onClick={() => navigate("/conduite")}
        >
          La conduite
        </button>
        <button
          className="space-x-2 items-center text-white font-bold hidden sm:inline text-xs"
          onClick={() => navigate("/assurance")}
        >
          Assurance auto
        </button>

        {isLogged === "true" ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="h-12 w-12 rounded-2xl -mr-2 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <div className="flex space-x-4 items-center justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black cursor-pointer ml-2  p-2 text-center rounded-2xl font-semibold text-xs"
            >
              Se connecter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
