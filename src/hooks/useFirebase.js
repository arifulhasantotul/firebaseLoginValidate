import {
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
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

   const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const signInUsingGithub = () => {
      return signInWithPopup(auth, githubProvider);
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
      handleLogout,
   };
};

export default useFirebase;
