import { createAction } from "redux-api-middleware";
import { normalize } from "normalizr";
import { user } from "../utils/schemes";

export const LOAD_PROFILE_REQUEST = "@@chat/LOAD_PROFILE_REQUEST";
export const LOAD_PROFILE_SUCCESS = "@@chat/LOAD_PROFILE_SUCCESS";
export const LOAD_PROFILE_ERROR = "@@chat/LOAD_PROFILE_ERROR";

export const loadProfile = () => {
  return createAction({
    endpoint: "/api/data/user",
    method: "GET",
    types: [
      LOAD_PROFILE_REQUEST,
      {
        type: LOAD_PROFILE_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          return normalize(json, [user]);
        },
      },
      LOAD_PROFILE_ERROR,
    ],
  });
};
