import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const AddTuition = () => {
  useTitle("Add Tuition");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const postedOn = format(new Date(), 'PP')


  const handleAddTuition = (data) => {
    const tuition = {
      email: user.email,
      yourClass: data.class,
      subject: data.subject,
      weekly: data.weekly,
      salary: data.salary,
      name: data.name,
      location: data.location,
      mobile: data.mobile,
      postedOn
    };

    fetch("http://localhost:5000/tuitions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(tuition),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Tuition added Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/tuitions");
      });
  };
  return (
    <div className="flex justify-center items-center my-5 bg-slate-100">
      <div className="w-full px-7 my-10 py-10 mx-5 ">
        <div className="text-3xl text-center text-sky-900 font-bold mb-4">Add A Tuition</div>
        <form onSubmit={handleSubmit(handleAddTuition)}>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Class</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("class", {
                  required: true,
                })}
              />
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("subject", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Weekly</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("weekly", {
                  required: true,
                })}
              />
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Salary</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("salary", {
                  required: true,
                })}
              />
            </div>
          </div>
          <p className="text-start text-sky-900 font-bold text-xl my-4">Contact Information:</p>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">          
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("location", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">          
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("mobile", {
                  required: true,
                })}
              />
            </div>
            
          </div>
          <div className="text-start">
            <input
            className="btn btn-accent rounded-none text-white my-5"
            value="Add Tuition"
            type="submit"
          /></div>
        </form>
      </div>
    </div>
  );
};

export default AddTuition;
