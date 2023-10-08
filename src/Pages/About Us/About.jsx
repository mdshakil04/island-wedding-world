import member1 from "../../assets/images/Bani Matt.png";
import member2 from "../../assets/images/Jane Turner.png";
import member3 from "../../assets/images/Julia Boyd.png";
import member4 from "../../assets/images/Mike Stuwart.png";
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className=" container mx-auto">
      <div className=" mb-4 mt-4 p-4">
        <h4>Meet Our</h4>
        <h2 className="text-4xl">PLANNERS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius
          deleniti commodi, perferendis quidem illum ipsa aspernatur inventore
          porro fugit voluptatibus beatae consequuntur perspiciatis ipsum sint
          dolorem quisquam recusandae architecto?
        </p>
      </div>
      <div className="container mx-auto grid lg:grid-cols-4 gap-4 p-4">
        <div className=" shadow-lg rounded-lg text-center flex flex-col">
          <img className="lg:h-[500px] rounded-lg" src={member1} alt="member" />
          <h3 className=" text-2xl font-bold pl-2">Bani Matt</h3>
          <p>Planner & Coordinator</p>
          <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
            <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
            <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
            <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg text-center flex flex-col">
          <img className="lg:h-[500px] rounded-lg" src={member2} alt="member" />
          <h3 className=" text-2xl font-bold pl-2">Bani Matt</h3>
          <p>Planner & Coordinator</p>
          <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
            <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
            <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
            <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg text-center flex flex-col">
          <img className="lg:h-[500px] rounded-lg" src={member4} alt="member" />
          <h3 className=" text-2xl font-bold pl-2">Bani Matt</h3>
          <p>Planner & Coordinator</p>
          <div className=" flex gap-4  mb-4 mt-2 pl-2 justify-center">
            <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
            <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
            <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg text-center flex flex-col">
          <img className="lg:h-[500px] rounded-lg" src={member3} alt="member" />
          <h3 className=" text-2xl font-bold pl-2">Bani Matt</h3>
          <p>Planner & Coordinator</p>
          <div className=" flex gap-4 mb-4 mt-2 pl-2 justify-center">
            <FaFacebook className=" text-2xl text-blue-600"></FaFacebook>
            <FaInstagram className=" text-2xl text-red-600"></FaInstagram>
            <FaTwitter className=" text-2xl text-blue-600"></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
