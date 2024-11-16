import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatment = () => {
    const services = useLoaderData();
    return (
        <div className="md:grid grid-cols-4 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default AllTreatment;