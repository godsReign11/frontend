import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const MATCHESAPI = {
    CreateMatches: async (data) => {
        return BASEAPIS.POSTAPI(data, "storeMatchDetails");
    },

    // GetContest: async (json) => {
    //     return BASEAPIS.GETAPI("getGlobalContest");
    // },
};
