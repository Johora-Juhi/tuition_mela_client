import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const { user } = useContext(AuthContext);
  const users = useLoaderData();
  const profile = users[0];

  const updateprofile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;
    // const role = data.role;
    const profile = { name, email, location, phone };
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


  return (
    <div>
      <div className="w-3/6 mx-auto shadow-2xl">
        <form onSubmit={updateprofile} className="p-20">
          <h1 className="text-3xl text-start text-sky-900 font-bold uppercase">
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
              defaultValue={profile.name}
              
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
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder={profile.phone}
              className="input input-bordered"
              defaultValue={profile.phone}
              
            />
          </div>
          <div className="text-start mt-10">
            <button className="btn btn-accent rounded-none text-white tracking-wider">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
