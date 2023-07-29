import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const CONTESTAPI = {
  CreateContest: async (body) => {
    return fetch(baseURL + "createContest", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json != null) {
          return json;
        } else return false;
      })
      .catch((err) => {
        return false;
      });
  },

  GetContest: async (json) => {
    return BASEAPIS.GETAPI("getContest");
  },
};
