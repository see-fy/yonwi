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
import Modal from "./pages/modal";


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
            name: user.displayName
          })
        );
        console.log(user)
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
          </>
        )}
        {!user && (
          <>
            <Route exact path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}
export default App;
