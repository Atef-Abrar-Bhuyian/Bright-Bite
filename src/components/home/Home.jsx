import { Link, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import Feedback from "../../feedback/Feedback";

const Home = () => {
  const services = useLoaderData();
  const { servicesData, feedbackData } = services;
  return (
    <div className="w-11/12 mx-auto space-y-10">
      <div>
      <Banner></Banner>
      </div>

      <div className="space-y-5">
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <div className="md:grid grid-cols-4 gap-10 ">
          {servicesData.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
        <button className="btn block mx-auto btn-primary text-white">
          <Link to="/treatments">Show More</Link>
        </button>
      </div>

      <div className="space-y-5">
        <h2 className="text-center text-3xl font-bold">Our Reviews</h2>
        <Feedback feedbackData={feedbackData}></Feedback>
      </div>
    </div>
  );
};

export default Home;
