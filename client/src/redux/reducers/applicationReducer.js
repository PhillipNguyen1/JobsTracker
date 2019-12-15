import uuid from "uuid";
import {
  GET_APPLICATIONS,
  GET_ONE_APPLICATION,
  ADD_APPLICATION,
  UPDATE_APPLICATION,
  DELETE_APPLICATION
} from "../actions/types";

const initialState = {
  applications: [],
  curApplication: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload
      };
    case GET_ONE_APPLICATION:
      return {
        ...state,
        curApplication: action.payload
      };
    case ADD_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.payload]
      };
    case UPDATE_APPLICATION:
      return {
        ...state,
        applications: state.applications.map(application => {
          if (application._id === action.payload.id) {
            return action.payload.newApplication;
          }

          return application;
        })
      };
    case DELETE_APPLICATION:
      return {
        ...state,
        applications: state.applications.filter(
          application => application._id !== action.payload.id
        )
      };
    default:
      return {
        ...state
      };
  }
}
