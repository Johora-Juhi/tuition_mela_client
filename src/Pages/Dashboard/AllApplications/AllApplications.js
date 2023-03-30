import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';


const AllApplications = () => {
    useTitle('All Applications');

    const url = `http://localhost:5000/allApplications`;

    const { data: applications = [], isLoading } = useQuery({
        queryKey: ['applications'],
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
            <h1 className='text-3xl text-sky-900 font-bold mb-10 uppercase'>All Applications</h1>
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
                                    <td>{application.tutorEmail}</td>
                                    <td>{application.yourClass}</td>
                                    <td>{application.subject}</td>
                                    <td className='text-green-600 font-bold'> <span className='text-xl'>&#x9F3;</span> {application.salary}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllApplications;