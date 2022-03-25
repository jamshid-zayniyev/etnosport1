import axios from "axios";

export const url = "https://api.ethnosport.abrorjonaxmadov.uz/api";
// export const id=2
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
