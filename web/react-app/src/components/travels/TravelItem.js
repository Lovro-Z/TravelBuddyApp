import jwtDecode from "jwt-decode";
import { Button, Card } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

const TravelItem = ({ travel, deleteTravel }) => {
  let match = useRouteMatch();

  const token = localStorage.getItem("token");
  let user;
  if (token) {
    user = jwtDecode(token);
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={travel?.imageUrl}
        style={{ height: "218px" }}
      />
      <Card.Body>
        <Card.Title>{travel.travelName}</Card.Title>
        <Card.Text>{travel.shortDescription}</Card.Text>
        <Card.Text style={{ color: "gray" }}>
          {travel.price}€ | {travel.transportation === "BUS" && "  🚌"}
          {travel.transportation === "PLANE" && "  ✈️"}
          {travel.transportation === "TRAIN" && "  🚂"}
        </Card.Text>
        <Link to={`${match.path}/${travel.id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
        {user?.auth === "ROLE_ADMIN" && (
          <>
            <Link to={`/admin/${travel.id}`} className="ml-2">
              <Button variant="warning">Edit travel</Button>
            </Link>
            <Button
              onClick={() => {
                const promptResult = window.confirm(
                  "Are you sure you want to delete this travel?"
                );
                if (promptResult) {
                  deleteTravel(travel.id);
                }
              }}
              variant="danger"
              className="ml-2"
            >
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default TravelItem;
