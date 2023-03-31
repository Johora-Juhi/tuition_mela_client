import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import tuition from "../../../assets/tuition.png";
import "./Tuition.css"
import TuitionsCard from "../TuitionsCard/TuitionsCard";
import ApplyModal from "../ApplyModal/ApplyModal";

const Tuitions = () => {
  useTitle("Tuitions");
  const [tuitions, setTuitions] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;

  useEffect(() => {
      const url = `http://localhost:5000/tuitions?page=${page}&size=${size}`;
      fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data);
              setTuitions(data.tuitions);
              setCount(data.count);
          })
  }, [page, size])

  const pages = Math.ceil(count / size);

  console.log(tuitions);
  const [avaiableTuitions, setAvailabeTuitions] = useState(null);
  return (
    <div>
      <div className="proBanner py-10 md:h-[550px]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="sm:w-full md:w-4/5 lg:w-2/5 mx-4 lg:mx-auto">
              <p className="font-bold text-4xl md:text-5xl text-sky-900 pb-4">Simply Get Connected with the Enterprise</p>
              <p className="text-gray-500">
                Flexible easy to access learning opportunities can bring a
                significant change in how individuals prefer to learn! The tuitionMela
                can offer you enjoy the beauty of Learning!
              </p>
            </div>
            <div className="sm:w-2/4 md:w-2/6 lg:w-1/5 mt-10 md:mt-0  mx-4 md:mx-auto">
                <img className="helloImage" src={tuition} alt="" />
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
            <div className="text-center">
            <div className="btn-group">
                {
                    [...Array(pages).keys()].map(number => 
                      <button
                      key={number}
                      className={page === number ? "btn bg-sky-900" : 'btn btn-outline'}
                      onClick={() => setPage(number)}>{number}</button> )
                }
            </div>
            </div>
    </div>
    
  );
};

export default Tuitions;
