import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: felx;
  align-items: center;
  min-height: 10vh;
  background-color: #0275d8;
  color: white;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUl = styled.ul`
  width: 50%;
  margin-bottom: 0;
  list-style: none;
`;

const liStyle = {
  cursor: "pointer",
  float: "right",
  margin: "0 16px",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Header = () => {
  return (
    <StyledHeader className="p-3">
      <StyledContainer className="d-flex container">
        <h1>
          <Link style={linkStyle} to="/travels">
            Travel
          </Link>
        </h1>

        <StyledUl>
          <li style={liStyle}>Log in</li>
          <li style={liStyle}>About</li>
          <li style={liStyle}>Agencies</li>
        </StyledUl>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
