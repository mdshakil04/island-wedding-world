const Service = ({ service }) => {
  const { name, image, price } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-start">
        <button className="btn btn-outline btn-secondary font-bold text-xl px-8">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
