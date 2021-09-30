import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { userService } from "../../services/user.service";

const StyledImg = styled.img`
  width: 100%;
  max-height: 60vh;
`;

const DateAndSpace = styled.p`
  color: gray;
`;

const Travel = () => {
  let { id } = useParams();
  const history = useHistory();

  const [travel, setTravel] = useState([]);

  const token = localStorage.getItem("token");
  let userFromJwt;
  if (token) {
    userFromJwt = jwtDecode(token);
  }

  const fetchUser = async () => {
    const fetchedUser = await userService.getUser();
    const user = await fetchedUser;

    return user;
  };

  const fetchTravel = useCallback(async () => {
    const fetchedTravel = await fetch(`http://localhost:8080/travel/${id}`);
    const travel = await fetchedTravel.json();
    setTravel(travel);
  }, [id]);

  const bookTravel = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      await fetchUser()
        .then(async (user) => await userService.bookTravel(user.id, travel.id))
        .then(() => history.push("/profile"));
    }
  };

  useEffect(() => {
    fetchTravel();
  }, [fetchTravel]);

  return (
    <div className="container mb-4">
      <StyledImg width="100%" src={travel.imageUrl} alt="travel" />
      <h2 className="mt-2">{travel.travelName}</h2>
      <DateAndSpace>Space left: {travel.spaceLeft}</DateAndSpace>
      <DateAndSpace>Traveling by: {travel.transportation}</DateAndSpace>
      <p>{travel.shortDescription}</p>
      <p>{travel.description}</p>
      <hr />
      <p>Price: {travel.price}€</p>
      {userFromJwt?.auth !== "ROLE_ADMIN" && (
        <>
          {travel.id === 100 && travel.spaceLeft < 75 ? (
            <button disabled="disabled" className="btn btn-secondary mr-2">
              Travel already booked
            </button>
          ) : (
            <button
              onClick={() => bookTravel()}
              className="btn btn-success mr-2"
            >
              Book travel
            </button>
          )}
        </>
      )}
      <Link to="/travels" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Travel;
