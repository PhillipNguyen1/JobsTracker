import {
  GET_APPLICATIONS,
  GET_ONE_APPLICATION,
  ADD_APPLICATION,
  UPDATE_APPLICATION,
  DELETE_APPLICATION
} from "./types";

export const getApplications = () => {
  return {
    type: GET_APPLICATIONS
  };
};

export const getOneApplication = (id) => {
  return {
    type: GET_ONE_APPLICATION
  };
};

export const addApplication = (application) => {
  return {
    type: ADD_APPLICATION
  };
};

export const updateApplication = (id) => {
  return {
    type: UPDATE_APPLICATION
  };
};

export const deleteApplication = (id) => {
  return {
    type: DELETE_APPLICATION
  };
};
