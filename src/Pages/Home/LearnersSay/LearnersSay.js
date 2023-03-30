import React from 'react';
import learner1 from '../../../assets/learner1.jpg';
import learner2 from '../../../assets/learner2.jpg';
import learner3 from '../../../assets/learner3.jpg';


const LearnersSay = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='font-bold text-4xl text-sky-900 py-3'>Learners say about tuition<span className='text-accent'>Mela</span></h1>
            <p className='text-stone-400'>Explore all of our tuitions and pick your suitable ones to enroll and start teaching with us!</p>
            <div className='py-10 w-full md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I found a tutor in less than a week within our budget. And really satisfied, he was everything we were looking for. He has been tutoring here since then. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner1} alt=""  />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Zohra Juhi</p>
                            <p className='text-start' > Rajshahi</p>
                        </div>
                    </div>
                </div>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I found a tutor in less than a week within our budget. And really satisfied, he was everything we were looking for. He has been tutoring here since then. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner2} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Ahmed Morshed</p>
                            <p className='text-start' >Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className='bg-stone-50 p-10'>
                    <p className='text-justify text-stone-400'>I found a tutor in less than a week within our budget. And really satisfied, he was everything we were looking for. He has been tutoring here since then. </p>
                    <div className='flex mt-10 items-center gap-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={learner3} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <p className='font-bold text-sky-900'>Anik Barua</p>
                            <p className='text-start' >Chattogram</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LearnersSay;