const ServiceCard = ({ service }) => {
    const {cost,description,image,treatment} = service
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
        className="flex-grow"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">{cost}</div>
        </h2>
        <p title={description}>{description.slice(0,100)}...</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline p-4">CheckOut More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
