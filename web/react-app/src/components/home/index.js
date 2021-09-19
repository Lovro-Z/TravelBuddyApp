import { Link } from "react-router-dom";

const Home = () => {
  const currentUser = localStorage.getItem("token");
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          textAlign: "center",
          backgroundImage:
            "url(https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg)",
          height: "fit-content",
          color: "white",
        }}
      >
        <div style={{ height: "88vh" }}>
          <h1 style={{ paddingTop: "135px" }}>Welcome to Travel Buddy!</h1>
          <Link to="/travels" className="btn btn-primary mx-3">
            Search for travels✈️
          </Link>
          <Link to="/login" className="btn btn-success mx-3">
            {currentUser ? "My profile" : "Log in"}👤
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
