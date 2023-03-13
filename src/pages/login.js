import React, { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const resetPassword = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        console.log("====================================");
        console.log("Email Password reset was sent");
        console.log("====================================");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("====================================");
        console.log({ errorCode, errorMessage });
        console.log("====================================");
      });
  };

  const signup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/modal");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    auth.languageCode = "it";
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("====================================");
      console.log("Email verification has been sent");
      console.log("====================================");
    });
  };
  const signin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/landing");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        navigate("/modal");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  let backdrop =
    "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525091__340.jpg";

  let style = {
    backgroundImage: "url(" + backdrop + ")",
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover w-full h-screen"
      style={style}
      l
    >
      <div className="h-[36rem] w-96 bg-slate-900 p-10">
        <form>
          <h1 className="text-white text-xl font-bold">Se connecter ou s'inscrire</h1>
          
          <input
            type="email"
            placeholder="Email"
            required
            ref={emailRef}
            className="bg-gray-800 h-14 text-white rounded p-2 my-6  w-full"
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            ref={passwordRef}
            className="bg-gray-800 h-14 text-white rounded p-2 mb-6  w-full"
          />
          <p className="text-gray-500 text-xs">
            Mot de passe oublié ?{" "}
            <span
              onClick={resetPassword}
              className="text-white hover:underline text-xs cursor-pointer font-semibold"
            >
              Changez le ici
            </span>{" "}
          </p>
          <p className="text-white text-xs text-center opacity-60 mb-3 mt-1">
            (Entrer l' email avant de changer le mot de passe)
          </p>

          <div class="flex flex-col items-center justify-between ">
            <button
              type="submit"
              onClick={signin}
              className="bg-pink-900 font-semibold rounded-lg text-white  text-md cursor-pointer p-2 w-full my-3"
            >
              Se connecter
            </button>

            <button
              type="submit"
              onClick={signup}
              className="cursor-pointer text-md font-semibold rounded-lg bg-amber-200 p-2 w-full mt-3 mb-1"
            >
              S'inscrire
            </button>
          </div>
        </form>
        <button
          onClick={loginWithGoogle}
          className="my-3 cursor-pointer text-md font-semibold w-full bg-slate-400 rounded-lg outline-none p-2"
        >
          Se connecter avec Google
        </button>

        <div className="flex mb-8">
          <p className="text-gray-400  text-xs font-semibold">
            Cette page est protégée par Google reCAPTCHA pour <br /> s'assurer que vous n'êtes pas un bot.{" "}
            <span className="text-blue-900 cursor-pointer text-sm font-semibold hover:border-b">
              Plus d'info.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;