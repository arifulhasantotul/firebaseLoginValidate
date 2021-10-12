import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
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

   const registerUsingEmail = (email, password, checkPassword) => {
      console.log(email, password, checkPassword);
      if (password.length < 8) {
         setError("Password should be more then 8 characters");
         return;
      }
      if (password !== checkPassword) {
         setError("Both password should be same");
         return;
      }

      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUsingEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
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
      auth,
      user,
      error,
      signInUsingGoogle,
      signInUsingGithub,
      signInUsingYahoo,
      signInUsingFacebook,
      registerUsingEmail,
      signInUsingEmail,
      handleLogout,
   };
};

export default useFirebase;
