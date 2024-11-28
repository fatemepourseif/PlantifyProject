import axios from "axios";
import { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem";
import { Link } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: servicesData } = await axios.get(
          "http://localhost:9000/services"
        );
        setServices(servicesData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <ul>
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/services/${service.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ServicesItem src={service.mainImg} title={service.title} />
        </Link>
      ))}
    </ul>
  );
};
export default ServicesList;
