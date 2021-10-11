import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
   const { signInUsingGoogle } = useAuth();

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
            <button onClick={signInUsingGoogle} className="btn_submit">
               Google Sign in
            </button>
         </div>
      </div>
   );
};

export default Register;
