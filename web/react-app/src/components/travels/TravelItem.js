import { Button, Card } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

const TravelItem = ({ travel }) => {
  let match = useRouteMatch();
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      />
      <Card.Body>
        <Card.Title>{travel.travelName}</Card.Title>
        <Card.Text>{travel.shortDescription}</Card.Text>
        <Link to={`${match.path}/${travel.id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TravelItem;
