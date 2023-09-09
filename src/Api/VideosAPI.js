import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const VideosAPI = {
  // GetAllBanners: async () => {
  //   return BASEAPIS.GETAPI("getBanner");
  // },

  CreateVideos: async (body) => {
    return fetch(baseURL + "storeVideo", {
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
