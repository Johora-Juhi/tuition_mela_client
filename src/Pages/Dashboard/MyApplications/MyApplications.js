import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';
import alone from '../../../assets/Alone.gif'



const MyApplications = () => {
    useTitle('My Applications');

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/myApplications?email=${user?.email}`;

    const { data: applications = [], isLoading } = useQuery({
        queryKey: ['applications', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='lg:w-3/4 mx-auto px-5 py-10'>
            {
                applications.length > 0 ?
                <>
                <h1 className='text-3xl text-sky-900 font-bold mb-10 uppercase'>My Applications</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Contact</th>
                            <th>Salary</th>
                            <th>Applied On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, i) => <>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{application.yourClass}</td>
                                    <td>{application.subject}</td>
                                    <td>{application.postedEmail}</td>
                                    <td className='badge bg-green-600 mt-4 border-0'> <span className='text-xl'>&#x9F3;</span> {application.salary}</td>
                                    <td>{application.appliedOn}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div></> :
            <div className="text-center">
            <h1 className='text-3xl text-sky-900 font-bold uppercase'>No applications yet!</h1>
            <img className="mx-auto" src={alone} alt="" />
            </div>
            }
        </div>
    );
};

export default MyApplications;