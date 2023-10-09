/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  console.log(services, id);
  const service = services.find((service) => service.id == id);
  const { name, image, price, details } = service;
  return (
    <div className="container mx-auto md:grid md:grid-cols-2 shadow-xl gap-8 p-4">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className=" flex flex-col justify-center ">
        <h2 className=" text-6xl font-bold font-serif mb-4">{name}</h2>
        <p className=" text-2xl ">{details}</p>
        <p>Price: <span className=" text-red-700 font-bold">{price}</span></p>
        <div className=" mt-4">
          <button className="btn btn-outline btn-secondary font-bold text-xl px-8">
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
