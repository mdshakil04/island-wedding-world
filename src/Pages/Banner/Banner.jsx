import banner from '../../assets/images/main-banner.jpg'
const Banner = () => {
  return (
    <div>
      <div data-aos="fade-down"
        className="hero h-[750px] w-auto"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2PmJgkS/main-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-white">
            <p className=' md:text-3xl text-2xl font-serif'>Country's Best Luxury</p>
            <h1 data-aos="fade-zoom-in" className="mb-5 md:text-9xl text-6xl font-bold font-serif text-center">WEDDING</h1>
            <h2 className='text-3xl md:text-4xl  font-serif'>Planners & Event Organizers!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
