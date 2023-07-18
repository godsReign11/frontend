import { baseURL } from "./baseURL";

export const BASEAPIS = {
  GETAPI: async (url) => {
    return await fetch(baseURL + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        // "x-api-key": key,
      },
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

  POSTAPI: async (jsonbody, url) => {
    console.log(jsonbody);
    console.log(url);
    return await fetch(baseURL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(jsonbody),
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


  DELETEAPI: async (json, url) => {
    return await fetch(baseURL + url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(json),
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

  PUTAPI: async (json, url) => {
    return await fetch(baseURL + url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(json),
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
};
