import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id,cost, description, image, treatment } = service;
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <figure>
        <img className="flex-grow" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">{cost}</div>
        </h2>
        <p title={description}>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="badge badge-outline p-4">CheckOut More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
