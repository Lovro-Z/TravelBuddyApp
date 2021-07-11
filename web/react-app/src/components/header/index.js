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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-item: center;
  margin-bottom: 0;
  list-style: none;

  @media (min-width: 600px) {
    width: 40%;
  }

  @media (min-width: 995px) {
    width: 30%;
  }
`;

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
          <li>Agencies</li>
          <li>About</li>
          <li>Log in</li>
        </StyledUl>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
