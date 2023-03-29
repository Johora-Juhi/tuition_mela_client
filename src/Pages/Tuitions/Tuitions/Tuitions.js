import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import tuition from "../../../assets/tuition.png";
import "./Tuition.css"
import TuitionsCard from "../TuitionsCard/TuitionsCard";
import ApplyModal from "../ApplyModal/ApplyModal";

const Tuitions = () => {
  useTitle("Tuitions");
  const tuitions = useLoaderData();
  console.log(tuitions);
  const [avaiableTuitions, setAvailabeTuitions] = useState(null);
  return (
    <div>
      <div className="proBanner py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="sm:w-full md:w-2/4 mx-auto">
              <p className="font-bold text-7xl text-sky-900 pb-4">Simply get connected with the enterprise</p>
              <p className="text-gray-500">
                Flexible easy to access learning opportunities can bring a
                significant change in how individuals prefer to learn! The tuitionMela
                can offer you enjoy the beauty of Learning!
              </p>
            </div>
            <div className="sm:w-full md:w-1/4 mx-auto">
                <img src={tuition} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 lg:mx-32 py-20'>
                {
                    tuitions.map(tuition => <TuitionsCard
                        key={tuition._id}
                        tuition={tuition}
                        setAvailabeTuitions={setAvailabeTuitions}>
                    </TuitionsCard>)
                }
            </div>
            {
                avaiableTuitions &&
                <ApplyModal
                    avaiableTuitions={avaiableTuitions}
                    setAvailabeTuitions={setAvailabeTuitions}
                ></ApplyModal>
            }
    </div>
  );
};

export default Tuitions;
