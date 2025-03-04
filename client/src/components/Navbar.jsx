import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

    const {setShowRecruiterLogin} = useContext(AppContext)
  

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <Link to={'/'}> <img src={assets.logo} alt="logo" /></Link>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={'/applications'}>Applied Jobs</Link>
            <p>|</p>
            <p>Hi, {user.firstName} </p>
            <UserButton/>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-sm">
            <button onClick={e => setShowRecruiterLogin(true)} className="text-gray-600 cursor-pointer">Recruiter Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
