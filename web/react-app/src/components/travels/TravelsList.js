import { useEffect, useState } from "react";
import TravelItem from "./TravelItem";
import styled from "styled-components";
import Filter from "../filter";
import { travelService } from "../../services/travel.service";

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
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const fetchedTravels = await fetch("http://localhost:8080/travel");
    const travels = await fetchedTravels.json();

    setTravels(travels);
  };

  const deleteTravel = async (id) => {
    await travelService.deleteTravel(id);
    fetchTravels();
  };

  return (
    <div className="container my-4">
      <Filter setTravels={setTravels} />
      <CardGrid>
        {travels?.map((travel) => (
          <TravelItem
            key={travel.id}
            travel={travel}
            deleteTravel={deleteTravel}
          />
        ))}
      </CardGrid>
    </div>
  );
};

export default TravelsList;
