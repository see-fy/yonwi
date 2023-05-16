import React, { useEffect } from "react";
import Landing from "./pages/landing";
import { Routes, Route, Navigate } from "react-router-dom";
import Code from "./pages/code";
import Conduite from "./pages/conduite";
import Assurance from "./pages/assurance";
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./slices/userSlice";
import Profile from "./pages/profile";
import Help from "./pages/help";
import Ads from "./pages/ads";
import Legal from "./pages/legalMen";
import Usage from "./pages/usage";
import Presse from "./pages/presse";
import Confidentiality from "./pages/confidentiality";
import Contact from "./pages/contact";
import Cookies from "./pages/cookies";
import Jobs from "./pages/jobs";
import Modal from "./pages/modal";
import About from "./pages/about";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          loginUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );
        console.log(user);
      } else {
        dispatch(logoutUser());
      }
    });
    return unsub;
  }, [dispatch]);

  return (
    <div>
      <Routes>
        {user && (
          <>
            <Route exact path="/" element={<Landing />} />
            <Route path="/code" element={<Code />} />
            <Route path="/conduite" element={<Conduite />} />
            <Route path="/assurance" element={<Assurance />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/modal" element={<Modal />} />
<Route path="/presse" element={<Presse />} />
<Route path="/confidentiality" element={<Confidentiality />} />
<Route path="/ads" element={<Ads />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/help" element={<Help />} />
<Route path="/legal" element={<Legal />} />
<Route path="/usage" element={<Usage />} />
<Route path="/cookies" element={<Cookies />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About/>} />
          </>
        )}
        {!user && (
          <>
            <Route exact path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
<Route path="/presse" element={<Presse />} />
<Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/code" element={<Code />} />
            <Route path="/conduite" element={<Conduite />} />
            <Route path="/assurance" element={<Assurance />} />
<Route path="/ads" element={<Ads />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/help" element={<Help />} />
<Route path="/legal" element={<Legal />} />
<Route path="/usage" element={<Usage />} />
<Route path="/cookies" element={<Cookies />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}
export default App;
