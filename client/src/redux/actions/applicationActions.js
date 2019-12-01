import axios from 'axios';
import {
  GET_APPLICATIONS,
  GET_ONE_APPLICATION,
  ADD_APPLICATION,
  UPDATE_APPLICATION,
  DELETE_APPLICATION
} from "./types";

const url = 'http://localhost:4000';

export const getApplications = () => dispatch => {
  console.log("Making API request");
  console.log("dispatching GET_APPLICATIONS");

  // make API requests 
  axios.get(`${url}/api/applications`).then(result => dispatch({
    type: GET_APPLICATIONS,
    payload: result.data
  }));

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
