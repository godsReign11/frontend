import { BASEAPIS } from "./BaseAPI";

export const BannerAPI = {
  GetAllBanners: async () => {
    return BASEAPIS.GETAPI("getBanner");
  },

  CreateBanner: async (data) => {
    console.log(data);
    return BASEAPIS.GETAPI("getBanner", data);
  },

  // ChangeCouponEndDate: async (json) => {
  //     return BASEAPIS.PUTAPI(json, 'promoUpdate');
  // },

  // ChangeCouponStatusUpdate: async (jsonbody) => {
  //     return BASEAPIS.PUTAPI(jsonbody, 'promoStatusUpdate');
  // }
};
