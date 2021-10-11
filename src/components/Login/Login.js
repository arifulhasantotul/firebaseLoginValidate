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
            {/* register your input into the hook by invoking the "register" function */}
            <input
               placeholder="name"
               defaultValue=""
               {...register("example")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="email"
               {...register("exampleRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && (
               <span className="error">This field is required</span>
            )}

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
