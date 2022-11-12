import React from 'react';
import icon1 from '../../../assets/images/fluoride.png'
import icon2 from '../../../assets/images/cavity.png'
import icon3 from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: icon1,
            name: 'Fluoride Treatment',
            details: 'ipsum dolo adipisicing elit. Voluptatum aliquid quidem omnis consectetur.'
        },
        {
            id: 2,
            icon: icon2,
            name: 'Fluoride Treatment',
            details: 'ipsum dolor adipisicing elit. Voluptatum aliquid quidem omnis consectetur.'
        },
        {
            id: 3,
            icon: icon3,
            name: 'Fluoride Treatment',
            details: 'ipsum dolor adipisicing elit. Voluptatum aliquid quidem omnis consectetur.'
        }
    ]
    return (

        <div>
            <div className='text-center mt-32 mb-16'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-4xl '>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-lg'>
                {
                    servicesData.map(ser => <Service
                        key={ser.id}
                        ser={ser}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;