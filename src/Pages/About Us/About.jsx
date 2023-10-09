import member1 from "../../assets/images/Bani Matt.png";
import member2 from "../../assets/images/Jane Turner.png";
import member3 from "../../assets/images/Julia Boyd.png";
import member4 from "../../assets/images/Mike Stuwart.png";
import carosel from '../../assets/images/Contact-us.png'
import React from "react";import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
            duration: 1000, // Animation duration in milliseconds
            delay: 200, 
    });
  }, []);
  return (
    <div>
      <div className=" container mx-auto">
        <div className=" mb-4 mt-4 p-4 text-center">
          <h4 className=" text-2xl font-bold">Meet Our</h4>
          <h2 className="text-6xl font-bold">PLANNERS</h2>
          <p>
          We are a passionate group of individuals dedicated to [briefly describe your mission or purpose]. Our journey began [mention the year or context when your organization started], and since then, we have been committed to [state the primary goal or vision of your organization].
          </p>
        </div>
        <div className="container mx-auto grid lg:grid-cols-4 gap-4 p-4">
          <div  data-aos="fade-right" className=" shadow-lg rounded-lg text-center flex flex-col">
            <img
              className="lg:h-[500px] rounded-lg"
              src={member1}
              alt="member"
            />
            <h3 className=" text-2xl font-bold pl-2">Bani Matt</h3>
            <p>Business Head</p>
            <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
              <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
              <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
              <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
            </div>
          </div>
          <div data-aos="fade-right" className=" shadow-lg rounded-lg text-center flex flex-col">
            <img
              className="lg:h-[500px] rounded-lg"
              src={member2}
              alt="member"
            />
            <h3 className=" text-2xl font-bold pl-2">Kate Winslet</h3>
            <p>Planner & Coordinator</p>
            <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
              <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
              <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
              <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
            </div>
          </div>
          <div data-aos="fade-left" className=" shadow-lg rounded-lg text-center flex flex-col">
            <img
              className="lg:h-[500px] rounded-lg"
              src={member4}
              alt="member"
            />
            <h3 className=" text-2xl font-bold pl-2">Zukerburg</h3>
            <p>Co Founder</p>
            <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
              <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
              <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
              <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
            </div>
          </div>
          <div data-aos="fade-left" className=" shadow-lg rounded-lg text-center flex flex-col">
            <img
              className="lg:h-[500px] rounded-lg"
              src={member3}
              alt="member"
            />
            <h3 className=" text-2xl font-bold pl-2">Maria</h3>
            <p>CEO</p>
            <div className=" flex gap-4 mb-4 mt-2 pl-2 justify-center">
              <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
              <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
              <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={carosel}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
