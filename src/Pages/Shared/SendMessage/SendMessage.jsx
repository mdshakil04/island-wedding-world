import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SendMessage = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-4 mt-4">
      <div className=" flex flex-col items-center justify-center text-center mx-auto text-white bg-[#FF4362] py-48 px-24">
        <p className=" text-xl">We Plan Wedding's That Are</p>
        <h2 className="text-7xl font-bold font-serif">Grand</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse
          officia cupiditate debitis necessitatibus eaque eligendi architecto
          inventore eius delectus.
        </p>
        <div className=" flex p-4 gap-4">
          <Link>
            <FaFacebook className=" text-4xl"></FaFacebook>
          </Link>
          <Link>
            <FaTwitter className=" text-4xl"></FaTwitter>
          </Link>
          <Link>
            <FaYoutube className=" text-4xl"></FaYoutube>
          </Link>
          <Link>
            {" "}
            <FaInstagram className=" text-4xl"></FaInstagram>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-12">
        <h2 className="text-5xl font-bold font-serif">SEND US A MESSAGE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, odio.
        </p>

        {/* md */}
        <div className=" py-4">
            <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-md w-full mb-4 "
            />
            <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-md w-full mb-4"
            />
            <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md w-full mb-4"
            />
            {/* lg */}
            <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">BOOK AN APPOINMENT</button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
