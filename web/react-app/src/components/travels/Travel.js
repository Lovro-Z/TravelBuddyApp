import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  max-height: 60vh;
`;

const DateAndSpace = styled.p`
  color: gray;
`;

// TODO: more properties(date, trip agenda, recomendations...)
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
    <div className="container mb-4">
      <StyledImg
        width="100%"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="travel"
      />
      <h2>{travel.travelName}</h2>
      <DateAndSpace>Space left: {travel.spaceLeft}</DateAndSpace>
      <p>{travel.shortDescription}</p>
      <p>Price: {travel.price}€</p>
      <Link to="/travels" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Travel;
