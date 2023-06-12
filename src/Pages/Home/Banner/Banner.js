import React from 'react';
import { Link } from 'react-router-dom';
import booklover from '../../../assets/Booklover.gif';
import 'animate.css';

const Banner = () => {
    return (
        <div className='w-full lg:w-5/6 mx-auto flex flex-col-reverse md:flex-row justify-center items-center py-10 gap-10 lg:gap-20 '>
            <div className='w-full px-4 lg:px-0 lg:w-1/2'>
                <h1 className='text-4xl lg:text-5xl font-bold text-sky-900 tracking-normal lg:tracking-wide animate__animated animate__fadeInDown' style={{lineHeight: '55px'}}>Looking for Tuitions Search Here! </h1>
                <p className='text-stone-400 py-8'>Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The tuitionMela can offer you to enjoy the beauty of Learning!</p>
                <Link className="btn btn-outline btn-accent text-slate-50 animate__animated animate__fadeInLeft" to="/tuitions">Look for Tuitions</Link>
            </div>
            <div className='w-full lg:w-2/5'>
                <img src={booklover} alt="" />
            </div>
        </div>
    );
};

export default Banner;