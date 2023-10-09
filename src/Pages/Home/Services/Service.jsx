import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
  const {id, name, image, price, details } = service;
  useEffect(() => {
    AOS.init({
            duration: 1000, // Animation duration in milliseconds
            delay: 200, 
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="card  bg-base-100 shadow-xl border">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>{details}</p>
        <p className=" font-bold">Price: {price}</p>
        <div className="card-actions justify-start">
          <Link to={`/service/${id}`}>
             <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Book Now</button>          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
