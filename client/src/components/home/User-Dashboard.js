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

  const refreshApplications = async () => {
    try {
      dispatch(getApplications());
      setLoaded(true);
    } catch (error) {
      console.log(error);
      setLoaded(false);
    }
  };

  const deleteApplication = async id => {
    try {
      await dispatch(deleteApplication(id)); // wait until we delete the application before refreshing
      await refreshApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const createApplication = async app => {
    try {
      dispatch(addApplication(app));
      await refreshApplications();
      setValue(0);
    } catch (error) {
      console.log(error);
    }
  };

  const editApplication = async app => {
    try {
      dispatch(updateApplication(app));
      await refreshApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

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
