import uuid from "uuid";
import {
  GET_APPLICATIONS,
  GET_ONE_APPLICATION,
  ADD_APPLICATION,
  UPDATE_APPLICATION,
  DELETE_APPLICATION
} from "../actions/types";

const initialState = {
  applications: [
    { id: uuid(), companyName: "google" },
    { id: uuid(), companyName: "amazon" },
    { id: uuid(), companyName: "tesla" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        ...state
      };
    case GET_ONE_APPLICATION:
      return {
        ...state
      };
    case ADD_APPLICATION:
      return {
        ...state
      };
    case UPDATE_APPLICATION:
      return {
        ...state
      };
    case DELETE_APPLICATION:
      return {
        ...state
      };
    default: 
      return state
  }
}
