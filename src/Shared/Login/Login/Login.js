import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";
import { useForm } from "react-hook-form";

const Login = () => {
  useTitle("Login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { googleLogin, signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [LoginUserEmail, setLoginUserEmail] = useState("");
  // const [token] = useToken(LoginUserEmail);
  const user = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    setLoginUserEmail("");
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  // const handleGoogleSignIn = () => {

  //     googleLogin()
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user);
  //             navigate(from, { replace: true });
  //         })
  //         .catch(error => console.error('error', error))
  // }
  // const handleGithubSignIn = () => {

  //     githubLogin()
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user);
  //             navigate(from, { replace: true });
  //         })
  //         .catch(error => console.error('error', error))
  // }
  return (
    <div className="hero background -mt-10 min-h-screen">
      <div className="hero-content">
        <div className="card shadow-2xl border border-accent">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h1 className="text-3xl font-bold text-start text-sky-900">
            Login here!
                        </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
              {loginError && (
                <label className="label">
                  <p className="label-text text-red-500">{loginError}</p>
                </label>
              )}
              {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
            </div>
            <div className="text-start">
              <button className="btn btn-accent text-white mt-2 rounded-none">Log in</button>
            </div>
            <hr />
            <p className="text-start text-sky-900 font-bold text-lg pt-4">
              Is this your first time here?
            </p>
            <p className="text-sm text-start">
              For full access to this site, you first need to create an account.
            </p>
            <div className="text-start">
              {" "}
              <button className="btn btn-outline btn-accent rounded-none">
                <Link to="/signup"> Create new account</Link>
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
