import React from 'react';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons//marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardsData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open at 9.00 am to 5.00 pm Everyday',
            icon: icon1,
            bgColor: 'bg-primary bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Manipur-New Market,Dhaka Bangladesh',
            icon: icon2,
            bgColor: 'bg-accent bg-gradient-to-r from-violet-500 to-fuchsia-500'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '01306-772769',
            icon: icon3,
            bgColor: 'bg-primary bg-gradient-to-r from-cyan-500 to-blue-500'
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardsData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;