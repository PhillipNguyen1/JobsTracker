import React, { useState, useEffect } from "react";
import Tabbar from "./Tabbar";
import ApplicationsTable from "./Applications-Table";
import CreateApplication from "./Create-App";
import axios from "axios";

function UserDashboard() {
  // hold applications table
  // fetches data for applications table
  const [isLoaded, setLoaded] = useState(false);
  const [applications, setApplications] = useState([]);
  const [value, setValue] = React.useState(0);
  const url = "http://localhost:4000/api/applications";

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // This async function gets called whenever the page loads and will update the data accordingly
  const refreshApplications = async () => {
    console.log("FETCHING DATA...");
    const result = await axios(url);
    try {
      setApplications(result.data);
      setLoaded(true);
    } catch (err) {
      console.error(err);
      setLoaded(false);
    }
  };

  const deleteApplication = async id => {
    console.log(`DELETING APP WITH ID: ${id}...`);
    const res = await axios.delete(
      `http://localhost:4000/api/applications/${id}`
    );
    refreshApplications();
  };

  const createApplication = async application => {
    console.log("CREATING NEW APPLICATION...");
    const res = await axios.post(
      "http://localhost:4000/api/applications",
      application
    );
    refreshApplications();
    setValue(0); // resets back to first tab
  };

  // Makes API request
  useEffect(() => {
    refreshApplications();
  }, []);

  return (
    <div>
      {/* Pass components to Tabbar */}
      <Tabbar
        value={value}
        handleTabChange={handleTabChange}
        ApplicationsTable={
          <ApplicationsTable
            applications={applications}
            isLoaded={isLoaded}
            handleDelete={deleteApplication}
          />
        }
        CreateApplication={
          <CreateApplication handleCreate={createApplication} />
        }
      />
    </div>
  );
}

export default UserDashboard;
