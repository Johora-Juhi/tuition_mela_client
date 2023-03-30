import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import alone from '../../../assets/Alone.gif'

const Applications = () => {
  useTitle("Applications");
  const applications = useLoaderData();

  return <div className='w-3/4 mx-auto px-5 py-10'>
{
    applications.length > 0 ?
    <div>
          <h1 className='text-3xl text-sky-900 font-bold mb-10 uppercase'>All Applicants</h1>
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
</div>:
<div className="text-center">
<h1 className='text-3xl text-sky-900 font-bold uppercase'>No applicants yet!</h1>
<img className="mx-auto" src={alone} alt="" />
</div>
}
</div>;
};

export default Applications;
