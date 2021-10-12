import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const [error, setError] = useState("");
   const {
      signInUsingGoogle,
      signInUsingGithub,
      signInUsingYahoo,
      signInUsingFacebook,
      signInUsingEmail,
   } = useAuth();
   // use location to track where the click came from
   const location = useLocation();
   const history = useHistory();

   // location.state?.from is the clicked path address
   const redirect_url = location.state?.from || "/home";
   // console.log("clicked from", location.state?.from);

   const handleGoogleSignIn = () => {
      signInUsingGoogle()
         .then((result) => {
            history.push(redirect_url);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleGithubSignIn = () => {
      signInUsingGithub()
         .then((result) => {
            history.push(redirect_url);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleYahooSignIn = () => {
      signInUsingYahoo()
         .then((result) => {
            history.push(redirect_url);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleFacebookSignIn = () => {
      signInUsingFacebook()
         .then((result) => {
            history.push(redirect_url);
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const handleEmailSignIn = (email, password) => {
      signInUsingEmail(email, password)
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
      handleEmailSignIn(data.email, data.password);
   };
   return (
      <div className="login-form">
         <h2>Login</h2>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
          */}
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* email input field start  */}
            <input
               placeholder="email"
               {...register("email", { required: true })}
            />

            {errors.email && <span className="error"> Email is required</span>}
            {/* email input field end  */}

            {/* email input field start  */}
            <input
               placeholder="password"
               {...register("password", { required: true })}
            />

            {errors.password && (
               <span className="error"> Password is required</span>
            )}
            {/* email input field end  */}
            {error && <div style={{ color: "red" }}>{error}</div>}

            <input type="submit" />
         </form>
         <p>
            new here? <Link to="/register">register</Link>{" "}
         </p>

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

export default Login;
