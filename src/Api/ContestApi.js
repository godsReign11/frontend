import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";


export const CONTESTAPI = {

    CreateContest: async (json) => {
        return BASEAPIS.POSTAPI(json, "createContest");
      },

      GetContest: async (json) => {
        return BASEAPIS.GETAPI("getContest");
      },

}
