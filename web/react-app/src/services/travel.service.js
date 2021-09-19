import { authenticationService } from "./authentication.service";

let requestURL = "http://localhost:8080/travel";

const filterTravels = (text, price, transportation) => {
  if (text) {
    requestURL += `?text=${text}&`;
  }
  if (price) {
    requestURL.slice(-1) === "&"
      ? (requestURL += `price=${price}&`)
      : (requestURL += `?price=${price}&`);
  }
  if (transportation) {
    requestURL.slice(-1) === "&"
      ? (requestURL += `transportation=${transportation}`)
      : (requestURL += `?transportation=${transportation}`);
  }

  return fetch(requestURL)
    .then(authenticationService.handleResponse)
    .then((travels) => {
      requestURL = "http://localhost:8080";
      return travels;
    });
};

const editTravel = (
  id,
  travelName,
  shortDescription,
  price,
  spaceLeft,
  transportation,
  description,
  imageURL
) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
    body: JSON.stringify({
      id,
      travelName,
      shortDescription,
      price,
      spaceLeft,
      transportation,
      description,
      imageURL,
    }),
  };

  return fetch(`${requestURL}/${id}`, requestOptions)
    .then(authenticationService.handleResponse)
    .then((travels) => {
      return travels;
    });
};

const createTravel = (
  travelName,
  shortDescription,
  price,
  spaceLeft,
  transportation,
  description,
  imageURL
) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
    body: JSON.stringify({
      travelName,
      shortDescription,
      price,
      spaceLeft,
      transportation,
      description,
      imageURL,
    }),
  };

  return fetch(`${requestURL}`, requestOptions)
    .then(authenticationService.handleResponse)
    .then((travels) => {
      return travels;
    });
};

const deleteTravel = (id) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
  };

  return fetch(`${requestURL}/${id}`, requestOptions)
    .then(authenticationService.handleResponse)
    .then((travel) => {
      return travel;
    });
};

export const travelService = {
  filterTravels,
  editTravel,
  createTravel,
  deleteTravel,
};
