import { authenticationService } from "./authentication.service";

function getUser() {
  const requestOptions = {
    method: "GET",
    headers: authenticationService.authHeader(),
  };
  return fetch(
    `${authenticationService.apiUrl}/api/user/current-user`,
    requestOptions
  ).then(authenticationService.handleResponse);
}

export const userService = {
  getUser,
};
