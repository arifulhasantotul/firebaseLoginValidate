import {
   getAuth,
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

   const signInUsingGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            setError(error.message);
         });
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
      handleLogout,
   };
};

export default useFirebase;
