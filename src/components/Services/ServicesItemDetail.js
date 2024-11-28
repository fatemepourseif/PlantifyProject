import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ServicesItemDetail = (props) => {
  const { id } = useParams();
  console.log(id);
  const [serviceDetail, setServiceDetail] = useState(null);

  useEffect(() => {
    const FetchServiceDetail = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/services");
        console.log("API Response:", data); // Debugging the response
        const service = data.find((item) => item.id === id);
        console.log("Found Service:", service); // Ensure the correct service is found
        setServiceDetail(service);
      } catch (err) {
        console.error(err.message);
      }
    };
    FetchServiceDetail();
  }, [id]);
  return (
    <div>
      <p>
        <Link>HOME</Link> / {serviceDetail.title}
      </p>
      <h1>{serviceDetail.title}</h1>
      <img src={serviceDetail.firstImg} alt={serviceDetail.title} />

      <img src={serviceDetail.secondImg} alt={serviceDetail.title} />
    </div>
  );
};
export default ServicesItemDetail;
