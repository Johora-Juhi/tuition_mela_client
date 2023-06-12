import React from "react";
import "./BecomeInstructor.css";
import instructor from "../../../assets/Teacher student-cuate.png";
import dot from "../../../assets/dot.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const BecomeInstructor = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto flex flex-col md:flex-row gap-8 justify-center items-start my-10">
      <div className="w-full lg:w-2/4 mx-auto px-4 lg:px-0">
        <div className="-ml-32 hidden lg:block">
          <img src={dot} alt="" className="bounce-time" />
        </div>
        <p className="font-bold text-4xl text-sky-900 py-3">
          Become an Instructor
        </p>
        <p className="text-stone-400">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us!
        </p>
        <button className="btn bg-sky-900 rounded-none my-10">
          Start Teaching Today
        </button>
        <p className="text-sky-900 font-bold">
          Follow Us:{" "}
          <FaFacebookF className="ml-2 shadow-xl inline text-4xl p-2"></FaFacebookF>{" "}
          <FaTwitter className="ml-2 shadow-xl inline text-4xl p-2"></FaTwitter>{" "}
          <FaLinkedinIn className="ml-2 shadow-xl inline text-4xl p-2"></FaLinkedinIn>{" "}
          <FaInstagram className="ml-2 shadow-xl inline text-4xl p-2"></FaInstagram>
        </p>
      </div>
      {/* <div> */}
      <figure className="w-full lg:w-2/5">
        <img src={instructor} alt="" className="" />
      </figure>{" "}
      {/* </div> */}
    </div>
  );
};

export default BecomeInstructor;
