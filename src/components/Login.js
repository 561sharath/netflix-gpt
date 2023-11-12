import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { AddUser } from "../utils/userSlice";

const Login = () => {
  const [isSigIn, setIsSignIn] = useState(true);
  const [ismessage, setIsMessage] = useState("");
  
  const dispacth = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSingIn = () => {
    setIsSignIn(!isSigIn);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setIsMessage(message);

    if (message) return;

    if (!isSigIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayname, photoURL } = auth.currentUser;
              dispacth(
                AddUser({
                  uid: uid,
                  email: email,
                  displayname: displayname,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-3 m-2 text-white">
          {isSigIn ? "Sing In" : "Sing Up"}
        </h1>
        {!isSigIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="First Name"
          />
        )}

        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="password"
        />
        <p className="text-red-500 font-bold ">{ismessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
        >
          <h1 className="font-bold text-lg  text-white">
            {isSigIn ? "Sign In" : "Sign Up"}
          </h1>
        </button>

        <p className="py-4 text-white cursor-pointer" onClick={toggleSingIn}>
          {isSigIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
