import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useStudent from '../../../hooks/useStudent';
import useTutor from '../../../hooks/useTutor';

const TuitionsCard = ({ tuition, setAvailabeTuitions }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const { user } = useContext(AuthContext);
    const [isStudent] = useStudent(user?.email);
    const [isTutor] = useTutor(user?.email);
    const { yourClass, _id, email, subject,
        weekly,
        salary,
       name,
        location,
        mobile, } = tuition;

    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-accent">
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl text-sky-900">Class {yourClass}</h2>
          <p>{subject}</p>
          <p>Weekly {weekly}</p>
          <p className='text-green-600'>Salary: {salary}<span className='font-bold text-xl'>&#x9F3;</span></p>
          <hr />
          <p className='font-bold'>Contact Information:</p>
          <p>Name: {name}</p>
          <p>Mobile: {mobile}</p>
          <p>Location: {location}</p>
          <div className="card-actions justify-end">
          {
            isTutor && 
            <label onClick={() => setAvailabeTuitions(tuition)} htmlFor="order-modal" className="btn bg-sky-900">Apply Now</label>
          }

          </div>
        </div>
      </div>
    );
};

export default TuitionsCard;