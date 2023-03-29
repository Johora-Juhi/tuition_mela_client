import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';


const MyApplications = () => {
    useTitle('My Applications');

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/allApplications`;

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
        <div className='container mx-auto px-5 py-10'>
            <h1 className='text-3xl text-sky-900 font-bold mb-10 '>All Applications</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant's Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, i) => <>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{application.tutorName}</td>
                                    <td>{application.email}</td>
                                    <td>{application.yourClass}</td>
                                    <td>{application.subject}</td>
                                    <td> <span className='text-xl'>&#x9F3;</span> {application.salary}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;