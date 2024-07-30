import banner from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header>
            <div className="hero" style={{ backgroundImage: `url(${bg})`, height: 700 }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' className="lg:w-1/3 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;