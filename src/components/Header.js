import React, { useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, RemoveUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispacth = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispacth(
          AddUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispacth(RemoveUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 z-30">
          <img
            className="w-12 h-12 rounded-full"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user-icon"
          />

          <button onClick={handleSignOut} className="text-white font-bold">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
