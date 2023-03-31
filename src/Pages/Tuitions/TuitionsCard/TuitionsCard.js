import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useStudent from "../../../hooks/useStudent";
import useTutor from "../../../hooks/useTutor";
import './TuitionsCard.css'

const TuitionsCard = ({ tuition, setAvailabeTuitions }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useContext(AuthContext);
  const [isStudent] = useStudent(user?.email);
  const [isTutor] = useTutor(user?.email);
  const {
    yourClass,
    _id,
    email,
    subject,
    weekly,
    salary,
    name,
    location,
    mobile,
    postedOn,
  } = tuition;

  const url = `http://localhost:5000/allApplications/${_id}`;

  const { data: applications = [] } = useQuery({
    queryKey: ["applications", _id],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(applications);

  return (
    <div className="card background lg:w-96 bg-base-100 shadow-xl border border-accent "  data-aos="fade-up"
    data-aos-duration="1000">
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl text-sky-900">
          Class {yourClass}
        </h2>
        <p>{subject}</p>
        <p>Weekly {weekly}</p>
        <p className="text-green-600 font-bold">
          Salary: {salary}
          <span className="font-bold text-xl">&#x9F3;</span>
        </p>
        <hr />
        <p className="font-bold">Contact Information:</p>
        <p>Name: {name}</p>
        <p>Mobile: {mobile}</p>
        <p>Location: {location}</p>
        <p>Posted On: {postedOn}</p>
        <div className="card-actions justify-end">
          { isTutor && 
            <label
              onClick={() => setAvailabeTuitions(tuition)}
              htmlFor="order-modal"
              className="btn bg-sky-900 tracking-wider "
            >
              Apply Now
            </label>
          }

          { isStudent ?
          <>{ email === user?.email ? 
          <div className="relative">
            <Link
              to={`/applications/${_id}`}
              className="btn bg-sky-900 tracking-wider "
            >
              Application
            </Link>
            <div className="badge  bg-white text-black font-bold absolute -top-3 right-1">
              {applications.length}
            </div>
          </div>
         : 
          <div className="relative cursor-pointer" data-title="Not your posted Tuition!">
            <button className="btn  tracking-wider " disabled >
              Application
            </button>
            <div className="badge  bg-white text-black font-bold absolute -top-3 right-1">
              {applications.length}
            </div>
          </div>}</> 
          :
          <></>
          }
        </div>
      </div>
    </div>
  );
};

export default TuitionsCard;
