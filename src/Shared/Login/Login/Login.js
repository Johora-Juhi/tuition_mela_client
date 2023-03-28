// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
// import { FaGoogle, FaGithub, } from 'react-icons/fa';


// const Login = () => {
//     const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const location = useLocation();
//     const from = location.state?.from?.pathname || '/';
//     const nevigate = useNavigate();

//     const handleSubmit = event => {
//         event.preventDefault();

//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(email, password);
//         setError('');

//         signIn(email, password)
//             .then(result => {
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

//     const handleGoogleSignIn = () => {

//         googleLogin()
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 nevigate(from, { replace: true });
//             })
//             .catch(error => console.error('error', error))
//     }
//     const handleGithubSignIn = () => {

//         githubLogin()
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 nevigate(from, { replace: true });
//             })
//             .catch(error => console.error('error', error))
//     }
//     return (
//         <div className="hero min-h-screen">
//             <div className="hero-content flex-col ">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Please login here!</h1>
//                     <p className="py-6">We will not share your information.</p>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-50">
//                     <form onSubmit={handleSubmit} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input name='email' type="email" placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input name='password' type="password" placeholder="password" className="input input-bordered" required />
//                             <label className="label">
//                                 <p className='label-text-alt'>New here? Please  <Link to='/signUp' className=" link link-primary link-hover"> Sign Up</Link></p>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-error text-slate-50">Log In</button>
//                         </div>
//                         <label className="label">
//                             <p className='label-text-alt text-red-600'>{error}</p>
//                         </label>
//                         <div className="divider">OR</div>
//                         <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='mr-2' /> Log In With Google</button>
//                         <button onClick={handleGithubSignIn} className="btn btn-outline"><FaGithub className='mr-2' /> Log In With Github</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;