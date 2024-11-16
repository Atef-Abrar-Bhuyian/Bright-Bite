import { Link, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="w-11/12 mx-auto space-y-10">
      <Banner></Banner>
      <div className="grid grid-cols-4 gap-10">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn block mx-auto btn-primary text-white">
        <Link to="/treatments">Show More</Link>
      </button>
    </div>
  );
};

export default Home;
