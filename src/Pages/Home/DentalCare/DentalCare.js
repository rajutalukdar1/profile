import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton';
import './DentalCare.css'

const DentalCare = () => {
    return (
        // <div className="card lg:card-side bg-base-100 shadow-xl">
        //     <figure><img src={treatment} alt="Album" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        //         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Get Start</button>
        //         </div>
        //     </div>
        // </div>
        // <div className='lg:flex items-center test '>
        //     <div>
        //         <figure><img src={treatment} alt="Album" /></figure>
        //     </div>
        //     <div className='w-1/2'>
        //         <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        //         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        //         <button className="btn btn-primary h-14 bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        //     </div>
        // </div>
        <div className="hero lg:p-44">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="rounded-lg shadow-2xl lg:w-1/3 h-1/3" alt='' />
                <div className='lg:ml-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;