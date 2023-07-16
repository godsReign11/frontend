import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const createGameApi = {
  CreateGameForApp: (data) => {
    console.log(data);
    return BASEAPIS.POSTAPI(data, "createGame");
  },

  GetAllGames: async () => {
    return await BASEAPIS.GETAPI("getGames");
  },

  GetAllPlayers: async () => {
    return await BASEAPIS.GETAPI("getPlayerAll");
  },

  CreatePlayerForApp: async (body) => {
    return await fetch(baseURL + "createPlayer", {
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
        console.log("Some error occured, please retry");
        console.log(err);
        return false;
      });
  },

  // ChangeCouponEndDate: async (json) => {
  //     return await BASEAPIS.PUTAPI(json, 'promoUpdate');
  // },

  // ChangeCouponStatusUpdate: async (jsonbody) => {
  //     return await BASEAPIS.PUTAPI(jsonbody, 'promoStatusUpdate');
  // }
};
