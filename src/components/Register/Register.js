import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
   const [error, setError] = useState("");

   const {
      signInUsingGoogle,
      signInUsingGithub,
      signInUsingYahoo,
      signInUsingFacebook,
   } = useAuth();

   // use location to track where the click came from
   const location = useLocation();
   const history = useHistory();

   // location.state?.from is the clicked path address
   const redirect_url = location.state?.from || "/home";

   // working
   const handleGoogleSignIn = () => {
      signInUsingGoogle()
         .then((result) => {
            history.push(redirect_url);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleGithubSignIn = () => {
      signInUsingGithub()
         .then((result) => {
            history.push(redirect_url);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleYahooSignIn = () => {
      signInUsingYahoo()
         .then((result) => {
            history.push(redirect_url);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleFacebookSignIn = () => {
      signInUsingFacebook()
         .then((result) => {
            history.push(redirect_url);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="login-form">
         <h2>Create Account</h2>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
          */}
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* name input field start  */}
            <input
               placeholder="name"
               {...register("name", { required: true })}
            />

            {errors.name && <div className="error"> Give full name</div>}
            {/* name input field end  */}

            {/* email input field start  */}
            <input
               placeholder="email"
               {...register("email", { required: true })}
            />

            {errors.email && <div className="error"> Email is required</div>}
            {/* email input field end  */}

            {/* password input field start  */}
            <input
               placeholder="new password"
               {...register("password", { required: true })}
            />

            {errors.password && <div className="error"> Give new password</div>}
            {/* password input field end  */}

            {/* re-enter password input field start  */}
            <input
               placeholder="Re-enter password"
               {...register("checkPassword", { required: true })}
            />

            {errors.checkPassword && (
               <div className="error"> Re-enter new password</div>
            )}
            {/* re-enter password input field end  */}

            <input type="submit" />
         </form>
         <p>
            already have an account? <Link to="/login">login</Link>{" "}
         </p>
         {error && <div style={{ color: "red" }}>{error}</div>}

         <hr />
         <div>
            <h4>Sign in via</h4>
            <button
               style={{ color: "#000", margin: "0 5px" }}
               onClick={handleGoogleSignIn}
               className="btn_submit"
            >
               <FcIcons.FcGoogle />
            </button>
            <button
               style={{ color: "#000", margin: "0 5px" }}
               onClick={handleGithubSignIn}
               className="btn_submit"
            >
               <FaIcons.FaGithub />
            </button>
            <button
               style={{ color: "blueviolet", margin: "0 5px" }}
               onClick={handleYahooSignIn}
               className="btn_submit"
            >
               <FaIcons.FaYahoo />
            </button>
            <button
               style={{ color: "blue", margin: "0 5px" }}
               onClick={handleFacebookSignIn}
               className="btn_submit"
            >
               <GrIcons.GrFacebookOption />
            </button>
         </div>
      </div>
   );
};

export default Register;
