import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const { signInUsingGoogle } = useAuth();

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
            <button onClick={signInUsingGoogle} className="btn_submit">
               Google Sign in
            </button>
         </div>
      </div>
   );
};

export default Login;
