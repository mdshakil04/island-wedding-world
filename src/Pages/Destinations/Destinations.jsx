import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      delay: 200,
    });
  }, []);
  return (
    <div className=" bg-gray-100 py-8 my-8">
      <div className=" w-auto md:grid md:grid-cols-2 gap-8 mt-8 container mx-auto shadow-lg">
        <div
          data-aos="fade-right"
          className=" w-auto p-2 flex flex-col justify-center text-right"
        >
          <p className=" text-2xl font-extrabold">Select Your Outstanding</p>
          <h2 className="lg:text-6xl text-4xl font-bold">
            WEDDING
            <br /> DESTINATION!
          </h2>
          <p className=" text-right">
            A wedding destination is a dreamy location where couples celebrate
            their special day. It offers a unique and picturesque backdrop,
            creating unforgettable memories in beautiful settings like beaches,
            rustic barns, charming villages, or tropical islands. It's a perfect
            choice for a romantic and adventurous wedding experience.
          </p>
          <div>
            <Link to="/venues">
              <button className="btn btn-outline btn-secondary font-bold text-xl px-8 mt-4 mb-4">
                See All Venues
              </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className=" md:grid md:grid-cols-2 gap-2">
          <img
            src="https://i.ibb.co/F8g3Tq9/Aljaferia-Palace.png"
            alt="bangkok"
          />
          <img src="https://i.ibb.co/SQ1S98W/Bangkok.png" alt="Aljaferia" />
          <img src="https://i.ibb.co/FVwRSjT/Maui-Island.png" alt="maui" />
          <img src="https://i.ibb.co/L5LdwXs/Rajasthan.png" alt="bangkok" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
