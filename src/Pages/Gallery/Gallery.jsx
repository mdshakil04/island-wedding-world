import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            delay: 200, 
        });
      }, []);
    return (
        <div className='container mx-auto w-full'>
            <h2 className='text-center mt-4 text-3xl md:text-6xl mb-8'>Our Gallery</h2>
            <div className='  md:grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <img data-aos="fade-down" className=' rounded-2xl' src='https://i.ibb.co/vLHBzS3/Gallery-1.jpg' alt="gallery" />
                <img data-aos="fade-down" className=' rounded-2xl' src='https://i.ibb.co/rwXVPDw/Gallery-2.jpg' alt="gallery" />
                <img data-aos="fade-down" className=' rounded-2xl' src='https://i.ibb.co/fSWjPMY/Gallery-3.jpg' alt="gallery" />
                <img data-aos="fade-up" className=' rounded-2xl' src='https://i.ibb.co/nj6LQ4W/Gallery-4.jpg' alt="gallery" />
                <img data-aos="fade-up" className=' rounded-2xl' src='https://i.ibb.co/72FZVVm/Gallery-5.jpg' alt="gallery" />
                <img data-aos="fade-up" className=' rounded-2xl' src='https://i.ibb.co/tXzcVdv/Gallery-6.jpg' alt="gallery" />
            </div>
        </div>
    );
};

export default Gallery;