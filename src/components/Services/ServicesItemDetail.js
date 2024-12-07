import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import classes from "./ServicesItemDetail.module.css";

const ServicesItemDetail = (props) => {
  const { id } = useParams();
  console.log(id);
  const [serviceDetail, setServiceDetail] = useState(null);

  useEffect(() => {
    const FetchServiceDetail = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/services");
        const service = data.find((item) => item.id === id);
        setServiceDetail(service);
      } catch (err) {
        console.error(err.message);
      }
    };
    FetchServiceDetail();
  }, [id]);
  return (
    <div className={classes.container}>
      {serviceDetail ? (
        <>
          <p className={classes.dir}>
            <Link to="/" className={classes.link}>
              HOME
            </Link>{" "}
            / {serviceDetail.name}
          </p>
          <h1>{serviceDetail.name}</h1>
          <img src={serviceDetail.firstImg} alt={serviceDetail.title} />
          <h3>{serviceDetail.advertizing}</h3>
          <ul>
            {serviceDetail.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p>{serviceDetail.info}</p>
          <img src={serviceDetail.secondImg} alt={serviceDetail.title} />
        </>
      ) : (
        <p>Loading service details...</p>
      )}
    </div>
  );
};
export default ServicesItemDetail;
