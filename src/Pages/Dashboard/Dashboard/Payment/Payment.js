import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);
const Payment = () => {
    const bookingData = useLoaderData();
    // console.log('data', bookingData);
    // const navigation = useNavigation();
    const { treatment, price, appointmentData, slot } = bookingData;
    // if (navigation.state === 'loading') {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2 className="text-2xl">Payment For : {treatment}</h2>
            <p className='text-xl'>Please Pay <strong>${price}</strong> for your appointment on {appointmentData} time {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookingData={bookingData} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;