// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

// const SignUp = () => {
//     const { createUser, updateUser } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const location = useLocation();
//     const from = location.state?.from?.pathname || '/';
//     const nevigate = useNavigate();

//     const handleSubmit = event => {
//         event.preventDefault();

//         const form = event.target;
//         const name = form.name.value;
//         const photoURL = form.photo.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, photoURL, email, password);
//         setError('');

//         createUser(email, password)
//             .then(result => {
//                 handleUpdateUser(name,photoURL);
//                 const user = result.user;
//                 console.log(user);
//                 nevigate(from, { replace: true });
//                 form.reset();
//             })
//             .catch(error => {
//                 console.error('error', error);
//                 setError(error.message);
//             })
//     }

//     const handleUpdateUser=(name,photoURL)=>{
//         const profile={
//             displayName:name,
//             photoURL:photoURL
//         }
//         updateUser(profile);
//     }

//     return (
//         <div  className="hero min-h-screen ">
//         <div className="hero-content flex-col ">
//             <div className="text-center lg:text-left">
//                 <h1 className="text-5xl font-bold">Please signup here!</h1>
//                 <p className="py-6">We will not share your information.</p>
//             </div>
//             <div  className="card bg-red-50 flex-shrink-0 w-full max-w-sm shadow-2xl">
//                 <form onSubmit={handleSubmit} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">PhotoUrl</span>
//                         </label>
//                         <input name='photo' type="photo" placeholder="photpUrl" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
//                         <label className="label">
//                             <p className='label-text-alt'>Already have an account?  <Link to='/login' className=" link link-hover link-primary"> Log In</Link></p>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6">
//                         <button className=" btn btn-error text-slate-50">Sign Up</button>
//                     </div>
//                     <label className="label">
//                             <p className='label-text-alt text-red-600'>{error}</p>
//                         </label>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default SignUp;