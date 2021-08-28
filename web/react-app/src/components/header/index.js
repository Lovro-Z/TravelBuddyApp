import { Link } from "react-router-dom";
import styled from "styled-components";

import { authenticationService } from "../../services/authentication.service";

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

const Header = ({ currentUser }) => {
  return (
    <StyledHeader className="p-3">
      <StyledContainer className="d-flex container">
        <h1>
          <Link style={linkStyle} to="/travels">
            Travel
          </Link>
        </h1>

        <StyledUl>
          {currentUser ? (
            <li style={liStyle}>
              <Link
                to="/travels"
                style={linkStyle}
                onClick={authenticationService.logout}
              >
                Log out
              </Link>
            </li>
          ) : (
            <li style={liStyle}>
              <Link style={linkStyle} to="/login">
                Log in
              </Link>
            </li>
          )}
          {currentUser && (
            <li style={liStyle}>
              <Link style={linkStyle} to="/profile">
                My profile
              </Link>
            </li>
          )}
          <li style={liStyle}>Agencies</li>
        </StyledUl>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
