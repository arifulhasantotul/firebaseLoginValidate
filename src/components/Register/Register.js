import React from "react";
import { useForm } from "react-hook-form";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
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
   console.log("clicked from", location.state?.from);

   const handleGoogleSignIn = () => {
      signInUsingGoogle().then((result) => {
         history.push(redirect_url);
      });
   };

   const handleGithubSignIn = () => {
      signInUsingGithub().then((result) => {
         history.push(redirect_url);
      });
   };

   const handleYahooSignIn = () => {
      signInUsingYahoo().then((result) => {
         history.push(redirect_url);
      });
   };

   const handleFacebookSignIn = () => {
      signInUsingFacebook().then((result) => {
         history.push(redirect_url);
      });
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   return (
      <div className="login-form">
         <h2>Create Account</h2>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
          */}
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* name input field start  */}
            <input
               placeholder="name"
               {...register("nameRequired", { required: true })}
            />

            {errors.nameRequired && (
               <div className="error"> Give full name</div>
            )}
            {/* name input field end  */}

            {/* email input field start  */}
            <input
               placeholder="email"
               {...register("emailRequired", { required: true })}
            />

            {errors.emailRequired && (
               <div className="error"> Email is required</div>
            )}
            {/* email input field end  */}

            {/* password input field start  */}
            <input
               placeholder="new password"
               {...register("passwordRequired", { required: true })}
            />

            {errors.passwordRequired && (
               <div className="error"> Give new password</div>
            )}
            {/* password input field end  */}

            {/* re-enter password input field start  */}
            <input
               placeholder="Re-enter password"
               {...register("checkPasswordRequired", { required: true })}
            />

            {errors.checkPasswordRequired && (
               <div className="error"> Re-enter new password</div>
            )}
            {/* re-enter password input field end  */}

            <input type="submit" />
         </form>
         <p>
            already have an account? <Link to="/login">login</Link>{" "}
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

export default Register;
