/* eslint-disable no-unused-vars */
import React from 'react';
import pnf from '../../assets/images/2451354.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' text-center'>
            <img  src={pnf} alt="" />
            <Link to='/'><button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;