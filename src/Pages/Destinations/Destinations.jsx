import bangkok from '../../assets/images/Bangkok.png';
import Aljaferia from '../../assets/images/Aljaferia Palace.png';
import maui from '../../assets/images/Maui Island.png';
import rajasthan from '../../assets/images/Rajasthan.png';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

const Destinations = () => {
    useEffect(() => {
        AOS.init({
                duration: 1000, // Animation duration in milliseconds
                delay: 200, 
        });
      }, []);
    return (
        <div className=" w-auto md:grid md:grid-cols-2 gap-8 mt-8 container mx-auto shadow-lg">
            
            <div data-aos="fade-right" className=" w-auto p-2 flex flex-col justify-center text-right">
                <p className=' text-2xl font-extrabold'>Select Your Outstanding</p>
                <h2 className="lg:text-6xl text-4xl font-bold">WEDDING<br/> DESTINATION!</h2>
                <p className=' text-right'>A wedding destination is a dreamy location where couples celebrate their special day. It offers a unique and picturesque backdrop, creating unforgettable memories in beautiful settings like beaches, rustic barns, charming villages, or tropical islands. It's a perfect choice for a romantic and adventurous wedding experience.</p>
                <div>
                <button className="btn btn-outline btn-secondary font-bold text-xl px-8 mt-4 mb-4">See All Venues</button>
                </div>
            </div>
            <div data-aos="fade-left" className=" md:grid md:grid-cols-2 gap-2">
                <img src={bangkok} alt="bangkok" />
                <img src={Aljaferia} alt="Aljaferia" />
                <img src={maui} alt="maui" />
                <img src={rajasthan} alt="bangkok" />
            </div>
        </div>
    );
};

export default Destinations;