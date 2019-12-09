import React, { useState, useEffect } from "react";
import Tabbar from "../navigation/Tabbar";
import ApplicationsTable from "../application/Applications-Table";
import CreateApplication from "../application/Application-Form";
import { useSelector, useDispatch } from "react-redux";
import {
  getApplications,
  addApplication,
  updateApplication,
  deleteApplication
} from "../../redux/actions/applicationActions";

const UserDashboard = props => {
  const applications = useSelector(state => state.application.applications); // state has application field that holds applications
  const [isLoaded, setLoaded] = useState(false);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  // GET all applications
  const refreshApplications = async () => {
    try {
      dispatch(getApplications());
      setLoaded(true);
    } catch (error) {
      console.log(error);
      setLoaded(false);
    }
  };

  // DELETE application
  const removeApplication = async id => {
    try {
      await dispatch(deleteApplication(id)); // wait until we delete the application before refreshing
      await refreshApplications();
    } catch (error) {
      console.log(error);
    }
  };

  // POST application
  const createApplication = async app => {
    try {
      dispatch(addApplication(app));
      await refreshApplications();
      setValue(0);
    } catch (error) {
      console.log(error);
    }
  };

  // PUT application (edit)
  const editApplication = async app => {
    try {
      dispatch(updateApplication(app));
      await refreshApplications();
    } catch (error) {
      console.log(error);
    }
  };

  // changes tab value/index to new value
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetches data when component is mounted
  useEffect(() => {
    refreshApplications();
  }, []);

  return (
    <div>
      <Tabbar
        value={value}
        handleTabChange={handleTabChange}
        ApplicationsTable={
          <ApplicationsTable
            applications={applications}
            isLoaded={isLoaded}
            handleDelete={removeApplication}
            handleEdit={editApplication}
          />
        }
        CreateApplication={
          <CreateApplication handleCreate={createApplication} />
        }
      />
    </div>
  );
};

export default UserDashboard;
