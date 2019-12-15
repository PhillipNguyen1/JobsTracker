import axios from "axios";
import {
  GET_APPLICATIONS,
  GET_ONE_APPLICATION,
  ADD_APPLICATION,
  UPDATE_APPLICATION,
  DELETE_APPLICATION
} from "./types";

const url = "http://localhost:4000/api/applications";

// GET ALL
export const getApplications = () => async dispatch => {
  try {
    const result = await axios.get(url);

    dispatch({
      type: GET_APPLICATIONS,
      payload: result.data
    });
  } catch (error) {
    console.log(error);
  }
};

// GET ONE
export const getOneApplication = id => async dispatch => {
  try {
    const result = await axios.get(`${url}/${id}`);

    dispatch({
      type: GET_ONE_APPLICATION,
      payload: result.data
    });
  } catch (error) {
    console.log(error);
  }
};

// ADD
export const addApplication = application => async dispatch => {
  try {
    const result = await axios.post(url, application);

    dispatch({
      type: ADD_APPLICATION,
      payload: result.data
    });
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
export const updateApplication = application => async dispatch => {
  try {
    await axios.put(`${url}/${application._id}`, application);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: {
        id: application._id,
        newApplication: application
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const deleteApplication = id => async dispatch => {
  try {
    await axios.delete(`${url}/${id}`);

    dispatch({
      type: DELETE_APPLICATION,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};