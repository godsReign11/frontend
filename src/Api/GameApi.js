import { BASEAPIS } from "./BaseAPI";

export const createGameApi = {
  CreateGameForApp: (data) => {
    console.log(data);
    return BASEAPIS.POSTAPI(data, "createGame");
  },

  GetAllGames: async () => {
    return await BASEAPIS.GETAPI("getGames");
  },

  CreatePlayerForApp: (data) => {
    console.log(data);
    return BASEAPIS.POSTAPI(data, "createPlayer");
  },

  // ChangeCouponEndDate: async (json) => {
  //     return await BASEAPIS.PUTAPI(json, 'promoUpdate');
  // },

  // ChangeCouponStatusUpdate: async (jsonbody) => {
  //     return await BASEAPIS.PUTAPI(jsonbody, 'promoStatusUpdate');
  // }
};
