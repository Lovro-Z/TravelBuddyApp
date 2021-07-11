import { useEffect, useState } from "react";
import TravelItem from "./TravelItem";
import styled from "styled-components";

const CardGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 995px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TravelsList = () => {
  useEffect(() => {
    fetchTravels();
  }, []);

  const [travels, setTravels] = useState([]);

  const fetchTravels = async () => {
    const fetchedTravels = await fetch("http://localhost:8080/travel");
    const travels = await fetchedTravels.json();

    setTravels(travels);
  };

  return (
    <div className="container my-4">
      <CardGrid>
        {travels?.map((travel) => (
          <TravelItem key={travel.id} travel={travel} />
        ))}
      </CardGrid>
    </div>
  );
};

export default TravelsList;
