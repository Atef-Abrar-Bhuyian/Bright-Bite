import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatment = () => {
    const services = useLoaderData();
    return (
        <div className="md:grid grid-cols-4 gap-10 w-11/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default AllTreatment;