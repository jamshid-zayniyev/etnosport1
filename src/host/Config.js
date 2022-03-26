import { httpRequest, url } from "./Host";

export const sportmensGet = () => {
  var config = {
    url: `${url}/sportsmen/`,
    method: "get",
  };
  return httpRequest(config);
};

export const sportsGet = () => {
  var config = {
    url: `${url}/sports/`,
    method: "get",
  };
  return httpRequest(config);
};

export const regionsGet = () => {
  var config = {
    url: `${url}/regions/`,
    method: "get",
  };
  return httpRequest(config);
};
