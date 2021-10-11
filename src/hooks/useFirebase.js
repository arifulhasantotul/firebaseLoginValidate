import {
   FacebookAuthProvider,
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   OAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState("");

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();
   const yahooProvider = new OAuthProvider("yahoo.com");
   const facebookProvider = new FacebookAuthProvider();

   const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const signInUsingGithub = () => {
      return signInWithPopup(auth, githubProvider);
   };

   const signInUsingYahoo = () => {
      return signInWithPopup(auth, yahooProvider);
   };

   const signInUsingFacebook = () => {
      return signInWithPopup(auth, facebookProvider);
   };

   const handleLogout = () => {
      signOut(auth)
         .then(() => {
            setUser({});
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         }
      });
   }, [auth]);

   return {
      user,
      error,
      signInUsingGoogle,
      signInUsingGithub,
      signInUsingYahoo,
      signInUsingFacebook,
      handleLogout,
   };
};

export default useFirebase;
