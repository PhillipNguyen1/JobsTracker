import React, { useState, useEffect } from "react";
import Tabbar from "../navigation/Tabbar";
import ApplicationsTable from "../application/Applications-Table";
import CreateApplication from "../application/Application-Form";
import axios from "axios";

const UserDashboard = props => {
  const [isLoaded, setLoaded] = useState(false);
  const [applications, setApplications] = useState([]);
  const [value, setValue] = useState(0);
  const url = "http://localhost:4000/api/applications/";

  // GET all applications
  const refreshApplications = async () => {
    const result = await axios(url);
    try {
      setApplications(result.data);
      setLoaded(true);
    } catch (err) {
      window.alert(err);
      setLoaded(false);
    }
  };

  // DELETE application
  const deleteApplication = async id => {
    try {
      await axios.delete(url + id);
      refreshApplications();
    } catch (err) {
      window.alert(err);
    }
  };

  // POST application
  const createApplication = async app => {
    try {
      await axios.post(url, app);
      refreshApplications();
      setValue(0);
    } catch (err) {
      window.alert(err);
    }
  };

  // PUT application (edit)
  const editApplication = async app => {
    try {
      await axios.put(url + app._id, app);
      setLoaded(false);
      refreshApplications();
    } catch (err) {
      window.alert(err);
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
            handleDelete={deleteApplication}
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
