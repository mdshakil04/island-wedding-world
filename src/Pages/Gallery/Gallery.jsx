import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
import image1 from '../../assets/images/Gallery (1).jpg';
import image2 from '../../assets/images/Gallery (2).jpg';
import image3 from '../../assets/images/Gallery (3).jpg';
import image4 from '../../assets/images/Gallery (4).jpg';
import image5 from '../../assets/images/Gallery (5).jpg';
import image6 from '../../assets/images/Gallery (6).jpg';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            delay: 200, 
        });
      }, []);
    return (
        <div className='container mx-auto w-full'>
            <h2 className='text-center mt-4 text-3xl md:text-7xl mb-8'>Our Gallery</h2>
            <div className='  md:grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <img data-aos="zoom-out-right" className=' rounded-2xl' src={image1} alt="gallery" />
                <img data-aos="zoom-in" className=' rounded-2xl' src={image2} alt="gallery" />
                <img data-aos="zoom-out-left" className=' rounded-2xl' src={image3} alt="gallery" />
                <img data-aos="zoom-out-right" className=' rounded-2xl' src={image4} alt="gallery" />
                <img data-aos="zoom-in" className=' rounded-2xl' src={image5} alt="gallery" />
                <img data-aos="zoom-out-left" className=' rounded-2xl' src={image6} alt="gallery" />
            </div>
        </div>
    );
};

export default Gallery;