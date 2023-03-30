import React from 'react';
import teach from '../../../assets/teach.png'
import learn from '../../../assets/learn.png'
import { Link } from 'react-router-dom';

const LookingFor = () => {
    return (
        <div className='text-center'>
            <p className='font-semibold text-stone-400'>INSTRUCTORS & STUDENTS</p>
            <h1 className='text-4xl font-bold text-sky-900 py-4'>What You Looking For?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-5/6 mx-auto py-8'>
                <div className="card bg-base-100 shadow-xl rounded-none">
                    <figure className="px-10 pt-10">
                        <img src={teach} alt="teach" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-bold text-2xl text-sky-900">Do you want to teach here?</h2>
                        <p className='text-stone-400 py-4'>Explore all of our Tuitions and pick your suitable ones to Teach and start teaching with us!</p>
                        <div className="card-actions">
                            <Link to="/signup"  className="btn btn-accent text-slate-50">Register Now</Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl rounded-none">
                    <figure className="px-10 pt-10">
                        <img src={learn} alt="learn" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="font-bold text-2xl text-sky-900">Do you want to learn here?</h2>
                        <p className='text-stone-400 py-4'>Post your tutor expectatinons and pick your suitable one and start learning with us!</p>
                        <div className="card-actions">
                            <Link to="/signup" className="btn btn-accent text-slate-50">Register Now</Link>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LookingFor;