import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import "./SignUp.css";

const SignUp = () => {
  useTitle("Signup");
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const handleSignUp = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Account created Successfully",
          showConfirmButton: false,
          timer: 2000,
        });

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.log(error));
        // saveUser(data.name, data.email, data.location, data.role);
        console.log(user);
      })

      .catch((error) => {
        console.error(error);
        setSignupError(error.message);
      });
  };

  // const saveUser = (name, email, location, role) => {
  //     const user = { name, email, location, role };
  //     fetch('https://assignment-twelve-server-six.vercel.app/users', {
  //         method: "POST",
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data);
  //             setCreatedUserEmail(email);
  //         })
  // }

  return (
    <div className="hero min-h-screen background -mt-10">
      <div className="hero-content p-0">
        <div className="card w-full sm:max-w-sm md:max-w-lg shadow-2xl sm:border-0 md:border border-accent my-20">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body ">
            <h1 className="text-3xl text-start text-sky-900 font-bold">
              New account
            </h1>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>
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
            {signupError && (
              <label className="label">
                <span className="label-text text-red-500">{signupError}</span>
              </label>
            )}
            <p className="text-start text-sm mt-2 ml-0 md:ml-1">The password must have at least 8 characters, at least 1 digit(s), at least 1 lower case letter(s), at least 1 upper case letter(s), at least 1 special character(s) such as as !,$,%,&,? or #</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: 'Password must be 8 charecters or more' },
                  pattern: { value: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "])/, message: "Password must be strong" }
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City/Town</span>
              </label>
              <input
                {...register("location", {
                  required: "Location is required",
                })}
                type="text"
                placeholder="Dhaka"
                className="input input-bordered"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered"
                {...register("role", {
                  required: true,
                })}
              >
                <option default value="buyer">
                  Student
                </option>
                <option value="seller">Tutor</option>
              </select>
            </div>
            <div className="text-start mt-2">
              <button className="btn btn-accent rounded-none text-white">
                Sign Up
              </button>
            </div>
            <hr />
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-sky-900 font-bold">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
