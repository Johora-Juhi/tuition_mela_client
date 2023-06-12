import React, { useRef } from 'react';
import './Subscribe.css';
import instructor from '../../../assets/instructor.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Subscribe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7efq22', 'template_rzmi67o', form.current, 'HcDRoU-wmqyzWpFtz')
      .then((result) => {
          console.log(result.text);
          alert('message sent')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className="flex justify-center py-40">
        <div className="pink w-full rounded-[120px]">
      <div className="text-center p-20 back w-5/6 mx-auto rounded-3xl drop-shadow-2xl -mt-48">
        <p className="text-4xl font-bold text-sky-900 ">
          There a better way to get healthy subscription
        </p>
        <p className="text-stone-400 py-10">
          Explore all of our Tuitions and pick your suitable ones to teach and
          start learning with us!
        </p>
        {/* <form className="join bg-red-50 py-2 w-2/3 mx-auto">
          <input className="input join-item rounded-none pr-96 bg-red-50" placeholder="Enter your email address" />
          <button className="btn bg-sky-900 join-item rounded-2">Subscribe Now</button>
        </form> */}
        <form ref={form} onSubmit={sendEmail} className="join bg-red-50 py-2 w-2/3 mx-auto">
      
      <input type="email" name="email"  className="input join-item rounded-none pr-96 bg-red-50" placeholder="Enter your email address" />
      <input type="submit" value="Subscribe Now"  className="btn bg-sky-900 join-item rounded-2"/>
    </form>
      </div>
      <div className="w-full lg:w-5/6 mx-auto flex flex-col md:flex-row gap-8 justify-center items-start my-10">
      <div className="w-full lg:w-2/4 mx-auto px-4 lg:px-0  pt-40">
        
        <p className="font-bold text-4xl text-sky-900 py-3">
        Changing learning for the better
        </p>
        <p className="text-stone-400">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us!
        </p>
        <button className="btn bg-sky-900 rounded-none my-10">
          Start Teaching Today
        </button>
        <p className="text-sky-900 font-bold">
          Follow Us:{" "}
          <FaFacebookF className="ml-2 shadow-xl inline text-4xl p-2"></FaFacebookF>{" "}
          <FaTwitter className="ml-2 shadow-xl inline text-4xl p-2"></FaTwitter>{" "}
          <FaLinkedinIn className="ml-2 shadow-xl inline text-4xl p-2"></FaLinkedinIn>{" "}
          <FaInstagram className="ml-2 shadow-xl inline text-4xl p-2"></FaInstagram>
        </p>
      </div>
      {/* <div> */}
      <figure className="w-full lg:w-2/5">
        <img src={instructor} alt="" className="" />
      </figure>{" "}
      {/* </div> */}
    </div>
    </div>
    </div>
  );
};

export default Subscribe;
