import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';
import background from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (

        <div className='text-center flex items-center justify-center'
            style={{
                background: `url(${background})`,
                padding: 50,
            }}>
            <div className="max-w-md">
                <h3 className='text-lg text-primary font-bold'>Contact Us</h3>
                <h2 className='text-4xl font-bold'>Stay connected with us</h2>
                <div className="card-body">
                    <input type="text" placeholder="email" className="input input-bordered" />
                    <input type="text" placeholder="Subject" className="input input-bordered" />
                    <input type="text" placeholder="Your message" className="input input-bordered" />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;