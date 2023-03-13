import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Header from "../components/Header";


function Assurance() {
    const user = useSelector(selectUser);
    return (
      <div>
      <Header isLogged={user ? "true" : "false"} />
      <div className='h-screen'>
      Assurance

      </div>
      </div>
  )
}

export default Assurance