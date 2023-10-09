/* eslint-disable no-unused-vars */
import React from "react";import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

const Venues = () => {
    useEffect(() => {
        AOS.init({
                duration: 1000, // Animation duration in milliseconds
                delay: 200, 
        });
      }, []);
  return (
    <div className=" container mx-auto md:grid md:grid-cols-2 gap-4">
      <div
        data-aos="fade-down"
        className=" lg:grid lg:grid-cols-2 p-4 items-center bg-base-100 shadow-xl">
        <figure className="">
          <img className=""
            src='https://i.ibb.co/F8g3Tq9/Aljaferia-Palace.png'
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-serif">Bangkok</h2>
          <p>Wedding venues are the heart of couples' special day, providing the perfect backdrop for their love story. From rustic barns to luxurious ballrooms, these spaces offer a range of options to suit every couple's unique vision, making each celebration unforgettable.</p>
          <p>Price: $<span className=" text-red-700 font-bold">500</span></p>
          <div className="card-actions">
          <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Select This Venue</button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="p-4  lg:grid  lg:grid-cols-2 items-center bg-base-100 shadow-xl">
        <figure>
          <img
            src='https://i.ibb.co/SQ1S98W/Bangkok.png'
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-serif">Aljaferia</h2>
          <p>Wedding venues are the heart of couples' special day, providing the perfect backdrop for their love story. From rustic barns to luxurious ballrooms, these spaces offer a range of options to suit every couple's unique vision, making each celebration unforgettable.</p>
          <p>Price: $<span className=" text-red-700 font-bold">400</span></p>
          <div className="card-actions">
          <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Select This Venue</button>
          </div>
        </div>
      </div>
      <div 
        data-aos="fade-up" 
        className=" p-4  lg:grid  lg:grid-cols-2 items-center bg-base-100 shadow-xl">
        <figure>
          <img
            src='https://i.ibb.co/FVwRSjT/Maui-Island.png'
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-serif">Maui Island</h2>
          <p>Wedding venues are the heart of couples' special day, providing the perfect backdrop for their love story. From rustic barns to luxurious ballrooms, these spaces offer a range of options to suit every couple's unique vision, making each celebration unforgettable.</p>
          <p>Price: $<span className=" text-red-700 font-bold">600</span></p>
          <div className="card-actions">
          <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Select This Venue</button>
          </div>
        </div>
      </div>
      <div 
        data-aos="fade-up" 
        className=" p-4  lg:grid  lg:grid-cols-2 items-center bg-base-100 shadow-xl">
        <figure>
          <img
            src='https://i.ibb.co/L5LdwXs/Rajasthan.png'
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-serif">Rajsthan</h2>
          <p>Wedding venues are the heart of couples' special day, providing the perfect backdrop for their love story. From rustic barns to luxurious ballrooms, these spaces offer a range of options to suit every couple's unique vision, making each celebration unforgettable.</p>
          <p>Price: $<span className=" text-red-700 font-bold">700</span></p>
          <div className="card-actions">
          <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Select This Venue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
