import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        // console.log(slot, name, phone, email);
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        fetch('https://y-rajutalukdar1.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);

                }
            })
        // console.log(booking);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered input-accent w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" value={user?.displayName} disabled placeholder="Full Name" className="input input-bordered input-accent w-full" />
                        <input name='email' type="email" value={user?.email} disabled placeholder="email" className="input input-bordered input-accent w-full" />
                        <input name='phone' type="Number" placeholder="Phone Number" required className="input input-bordered input-accent w-full" />
                        <input type="Submit" defaultValue='Submit' className='btn btn-accent w-full ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;