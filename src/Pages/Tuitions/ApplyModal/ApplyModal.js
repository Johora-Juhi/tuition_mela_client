import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ApplyModal = ({ avaiableTuitions, setAvailabeTuitions }) => {
    const { user } = useContext(AuthContext);
    const appliedOn = format(new Date(), 'PP')


    const {  _id, yourClass , subject, salary, email } = avaiableTuitions;
    const handleApplication = event => {
        event.preventDefault();
        const form = event.target;
        const tutorName = form.name.value;
        const tutorEmail = form.email.value;
        const phone = form.phone.value;
        const education = form.education.value;
        const institute = form.institute.value;

        const application = {
            tuitionId: _id,
            tutorName,
            postedEmail: email,
            tutorEmail,
            phone,
            education,
            institute,
            yourClass,
            subject,
            salary,
            appliedOn
        }
        fetch('http://localhost:5000/applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(application),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setAvailabeTuitions(null);
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Applied Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                else {
                    Swal.fire({
                        position: 'center center',
                        icon: 'error',
                        title: data.message
                    })
                }
            })
    }
    return (
        <div>
            <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleApplication} className='mt-6 grid gap-2 grid-cols-1'>
                        <label className="label">
                            <span className="label-text">Tutors's Name</span>
                        </label>
                        <input name='name' disabled type="text" value={user?.displayName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buyer's Email</span>
                        </label>
                        <input name='email' disabled type="text" value={user?.email} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name='phone' type="text" placeholder='Enter Your Phone Number' className="input input-bordered w-full" required />

                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input name='education' type="text" placeholder='Enter Your Education' className="input input-bordered w-full" required />

                        <label className="label">
                            <span className="label-text">Institute</span>
                        </label>
                        <input name='institute' type="text" placeholder='Enter Your Institute' className="input input-bordered w-full" required />
                        <input className='btn bg-sky-900 w-full mt-4' type="submit" value="Apply" />
                    </form>
                </div>
            </div>
        </>
        </div>
    );
};

export default ApplyModal;