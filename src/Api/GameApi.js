import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const createGameApi = {
  CreateGameForApp: (data) => {
    console.log(data);
    return BASEAPIS.POSTAPI(data, "createGame");
  },

  GetAllGames: async () => {
    return BASEAPIS.GETAPI("getGames");
  },

  GetAllPlayers: async () => {
    return BASEAPIS.GETAPI("getPlayerAll");
  },


  CreatePlayerForApp: async (body) => {
    return fetch(baseURL + "createPlayer", {
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

  // ChangeCouponEndDate: async (json) => {
  //     return BASEAPIS.PUTAPI(json, 'promoUpdate');
  // },

  // ChangeCouponStatusUpdate: async (jsonbody) => {
  //     return BASEAPIS.PUTAPI(jsonbody, 'promoStatusUpdate');
  // }
};
