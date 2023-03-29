import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const { user } = useContext(AuthContext);
  console.log(user);
  const users = useLoaderData();
  const profile = users[0];
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const updateprofile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    // const role = data.role;
    const profile = { name, email, location };
    console.log(profile);
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center center",
            icon: "success",
            title: "Profile Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(data);
      }

        console.log(data);
      });
  };

  const handleUpdatePassword = (data) =>{
    const oldPassword = data.oldPassword;
    const password = data.password;

    if(oldPassword === user.password){
        user.updatePassword(password).then(() => {
            console.log("Password updated!");
          }).catch((error) => { console.log(error); })
    }
  }
  return (
    <div>
      <div className="w-5/6 mx-auto shadow-2xl">
        <form onSubmit={updateprofile} className="w-2/4 py-10 px-20">
          <h1 className="text-3xl text-start text-sky-900 font-bold">
            Profile information
          </h1>
          <p className="text-start pt-2 pb-4">
            Update your account's profile information
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder={profile.name}
              className="input input-bordered"
              defaultvalue={profile.name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder={profile.email}
              className="input input-bordered"
              defaultValue={profile.email}
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">City/Town</span>
            </label>
            <input
              name="location"
              type="text"
              placeholder={profile.location}
              className="input input-bordered"
              defaultValue={profile.location}
              required
            />
          </div>
          <div className="text-start mt-2">
            <button className="btn btn-accent rounded-none text-white">
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="w-5/6 mx-auto shadow-2xl my-10">
        <form onSubmit={handleSubmit(handleUpdatePassword)} className="w-2/4 py-10 px-20">
          <h1 className="text-3xl text-start text-sky-900 font-bold">
            Update Password
          </h1>
          <p className="text-start pt-2 pb-4">Ensure your password is strong</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Current Password</span>
            </label>
            <input
              {...register("oldPassword", {
                required: "Password is required",
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
              <span className="label-text">New Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 charecters or more",
                },
                pattern: {
                  value: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "])/,
                  message: "Password must be strong",
                },
              })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div className="text-start mt-2">
            <button className="btn btn-accent rounded-none text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
