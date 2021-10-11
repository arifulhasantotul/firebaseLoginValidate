import React from "react";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
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

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   return (
      <div className="login-form">
         <h2>Login</h2>
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
          */}
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* email input field start  */}
            <input
               placeholder="email"
               {...register("emailRequired", { required: true })}
            />

            {errors.emailRequired && (
               <span className="error"> Email is required</span>
            )}
            {/* email input field end  */}

            {/* email input field start  */}
            <input
               placeholder="password"
               {...register("passwordRequired", { required: true })}
            />

            {errors.passwordRequired && (
               <span className="error"> Password is required</span>
            )}
            {/* email input field end  */}

            <input type="submit" />
         </form>
         <p>
            new here? <Link to="/register">register</Link>{" "}
         </p>

         <hr />
         <div>
            <h4>Sign in via</h4>
            <button onClick={handleGoogleSignIn} className="btn_submit">
               <FcIcons.FcGoogle />
            </button>
         </div>
      </div>
   );
};

export default Login;
