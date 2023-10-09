import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
import collage from '../../assets/images/collage.png'

const WeddingPlanners = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            delay: 200, 
        });
      }, []);
    return (
        <div className=" bg-gray-100 ">
            <div className=' container mx-auto grid md:grid-cols-2 p-8'>
                <div data-aos="fade-down" >
                    <img src={collage} alt="" />
                </div>
                <div data-aos="fade-up"  className='flex flex-col justify-center'>
                    <p className=' font-bold text-xl'>Your Exclusive</p>
                    <h2 className="text-6xl font-bold">WEDDING <br/>PLANNERS</h2>
                    <p>A wedding plan is a comprehensive and organized outline of all the details and arrangements needed to create a memorable and successful wedding ceremony and reception. It includes elements such as choosing a date and venue, creating a budget, selecting a guest list, arranging for catering and decor, deciding on the bridal party, and coordinating various logistics like transportation and accommodations......</p>
                    <div className='mt-4'><button className="btn btn-outline btn-secondary font-bold text-xl px-8 rounded-none">READ MORE</button></div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlanners;