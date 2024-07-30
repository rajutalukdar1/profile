import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    // console.log(appointmentOption)
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card shadow-xl ">
            <div className="card-body text-center">
                <p className="card-title text-primary font-bold justify-center">{name}</p>
                <p>{slots.length > 0 ? slots[0] : 'Try to anther Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>price:${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;