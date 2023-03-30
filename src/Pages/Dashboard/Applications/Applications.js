import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Applications = () => {
  useTitle("Applications");
  const applications = useLoaderData();
  console.log(applications);
//   const applications = data[0];
//   console.log(applications);

  return <div className='container mx-auto px-5 py-10'>
  <h1 className='text-3xl text-sky-900 font-bold mb-10 '>All Applicants</h1>
  <div className="overflow-x-auto">
      <table className="table w-full">
          <thead>
              <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Education</th>
                  <th>Institute</th>
                  <th>Email</th>
                  <th>Applied On</th>
              </tr>
          </thead>
          <tbody>
              {
                  applications.map((application, i) => <>
                      <tr>
                          <th>{i + 1}</th>
                          <td>{application.tutorName}</td>
                          <td>{application.education}</td>
                          <td>{application.institute}</td>
                          <td>{application.tutorEmail}</td>
                          <td>{application.appliedOn}</td>
                      </tr>
                  </>)
              }
          </tbody>
      </table>
  </div>
</div>;
};

export default Applications;
