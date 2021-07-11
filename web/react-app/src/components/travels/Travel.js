import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Travel = () => {
  let { id } = useParams();
  useEffect(() => {
    fetchTravel();
  }, []);

  const [travel, setTravel] = useState([]);

  const fetchTravel = async () => {
    const fetchedTravel = await fetch(`http://localhost:8080/travel/${id}`);
    const travel = await fetchedTravel.json();
    setTravel(travel);
  };

  return (
    <div className="container my-4">
      <h2>{travel.travelName}</h2>
      <p>{travel.shortDescription}</p>
      <Link to="/travels" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Travel;
