import { BASEAPIS } from "./BaseAPI";
import { baseURL } from "./baseURL";

export const allUsersAPI = {
    ViewlAllUsersData: () => {
        return BASEAPIS.GETAPI("getUsers");
    },
}