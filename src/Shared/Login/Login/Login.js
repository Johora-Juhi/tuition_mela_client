import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { useForm } from "react-hook-form";
import useToken from "../../../hooks/useToken";

const Login = () => {
  useTitle("Login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [LoginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(LoginUserEmail);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, token, navigate]);

  if (user?.email) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginUserEmail("");
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="hero background  min-h-screen -mb-10">
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
            </div>
            <div className="text-start">
              <button className="btn btn-accent text-white mt-2 rounded-none">
                Log in
              </button>
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
              
                <Link to="/signup"> <button className="btn btn-outline btn-accent rounded-none">Create new account</button></Link>
              
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
