import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  max-height: 60vh;
`;

const DateAndSpace = styled.p`
  color: gray;
`;

const Travel = () => {
  const currentUser = localStorage.getItem("token");
  let { id } = useParams();

  const [travel, setTravel] = useState([]);

  const fetchTravel = useCallback(async () => {
    const fetchedTravel = await fetch(`http://localhost:8080/travel/${id}`);
    const travel = await fetchedTravel.json();
    setTravel(travel);
  }, [id]);

  useEffect(() => {
    fetchTravel();
  }, [fetchTravel]);

  return (
    <div className="container mb-4">
      {travel.id === 100 && (
        <StyledImg
          width="100%"
          src="https://assets.wego.com/image/upload/v1611848131/country-pages/es.jpg"
          alt="travel"
        />
      )}
      {travel.id === 101 && (
        <StyledImg
          width="100%"
          src="https://www.travelsafe-abroad.com/wp-content/uploads/1500-ss-large-rothenburg-121494922.jpg"
          alt="travel"
        />
      )}
      {travel.id === 102 && (
        <StyledImg
          width="100%"
          src="https://media.nomadicmatt.com/englandguide.jpg"
          alt="travel"
        />
      )}
      {travel.id === 103 && (
        <StyledImg
          width="100%"
          src="https://static.independent.co.uk/2021/03/11/13/iStock-1185953092.jpg?width=982&height=726&auto=webp&quality=75"
          alt="travel"
        />
      )}
      {travel.id === 104 && (
        <StyledImg
          width="100%"
          src="https://theasiacollective.com/wp-content/uploads/2018/06/Feature-Photo-1-e1530688449976.png"
          alt="travel"
        />
      )}
      {travel.id === 105 && (
        <StyledImg
          width="100%"
          src="https://assets.wego.com/image/upload/v1611848131/country-pages/hr.jpg"
          alt="travel"
        />
      )}
      {/* <StyledImg
          width="100%"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="travel"
        /> */}
      <h2 className="mt-2">{travel.travelName}</h2>
      <DateAndSpace>Space left: {travel.spaceLeft}</DateAndSpace>
      <DateAndSpace>Traveling by: {travel.transportation}</DateAndSpace>
      <p>{travel.shortDescription}</p>
      <p>{travel.description}</p>
      <hr />
      <p>Price: {travel.price}€</p>
      <Link
        to={currentUser ? "/profile" : "/login"}
        className="btn btn-success mr-2"
      >
        Book travel
      </Link>
      <Link to="/travels" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Travel;
