import React from 'react';
import choose from '../../../assets/choose.png';
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ChooseUs = () => {
    return (
        <div className="card md:card-side bg-base-100 my-20 w-full lg:w-5/6 mx-auto">
            <figure className='w-full lg:w-3/6'><img src={choose} alt="Album" /></figure>
            <div className="w-full lg:w-1/2 mt-20 md:mt-0 lg:mt-20  px-4 lg:p-0">
                <p className='font-bold text-stone-400'>WHY CHOOSE US?</p>
                <h2 className="font-bold text-4xl text-sky-900 py-3">Find Your Tuition Soon and Easily</h2>
                <p className='text-stone-400'>Explore all of our Tuitions and pick your suitable ones to teach and start teching with us!</p>
                <div className='py-10'>
                    <p className='flex items-center text-stone-400'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Go at Your Own Pace in this World</span></p>
                    <p className='flex items-center text-stone-400 py-3'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Choose from Many Options</span></p>
                    <p className='flex items-center text-stone-400'><FaCheck className='text-sky-900 mr-3'></FaCheck><span>Start Teaching the Subjects You are Comfortable with</span></p>
                </div>
                <div className="card-actions justify-start">
                <Link className="btn btn-accent rounded-none mt-0 lg:mt-7 text-slate-50" to="/tuitions">Start Teaching Today</Link>                </div>
            </div>
        </div>
    );
};

export default ChooseUs;