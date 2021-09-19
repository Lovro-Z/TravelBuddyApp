import { authenticationService } from "./authentication.service";

const getUser = () => {
  const requestOptions = {
    method: "GET",
    headers: authenticationService.authHeader(),
  };
  return fetch(
    `${authenticationService.apiUrl}/api/user/current-user`,
    requestOptions
  ).then(authenticationService.handleResponse);
};

const addUser = (username, password, firstName, lastName) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, password, firstName, lastName }),
  };

  return fetch(`${authenticationService.apiUrl}/api/user`, requestOptions)
    .then(authenticationService.handleResponse)
    .then((user) => {
      return user;
    });
};

const updateUser = (id, username, password, firstName, lastName) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
    body: JSON.stringify({ id, username, password, firstName, lastName }),
  };

  return fetch(`${authenticationService.apiUrl}/api/user/${id}`, requestOptions)
    .then(authenticationService.handleResponse)
    .then((user) => {
      return user;
    });
};

const bookTravel = (id, travelId) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
  };

  return fetch(
    `${authenticationService.apiUrl}/api/user/book/${id}?travelId=${travelId}`,
    requestOptions
  )
    .then(authenticationService.handleResponse)
    .then((user) => {
      return user;
    });
};

const cancelTravel = (id) => {
  const currentUser = localStorage.getItem("token");
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${currentUser}`,
    },
  };

  return fetch(
    `${authenticationService.apiUrl}/api/user/cancel/${id}`,
    requestOptions
  )
    .then(authenticationService.handleResponse)
    .then((user) => {
      return user;
    });
};

export const userService = {
  getUser,
  addUser,
  updateUser,
  bookTravel,
  cancelTravel,
};
