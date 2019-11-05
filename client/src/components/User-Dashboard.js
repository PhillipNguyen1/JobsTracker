import React, { useState, useEffect } from "react";
import Tabbar from "./Tabbar";
import ApplicationsTable from "./Applications-Table";
import CreateApplication from "./Create-App";
import axios from "axios";

const UserDashboard = (props) => {
  const { UpdateApp } = props
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
  }

  // DELETE application
  const deleteApplication = async (id) => {
    console.log(`DELETING APP WITH ID: ${id}...`);
    await axios.delete(url + id);
    refreshApplications();
  };

  // POST application
  const createApplication = async (app) => {
    console.log("CREATING NEW APPLICATION...");
    try {
      await axios.post(url, app);
      refreshApplications();
      setValue(0); // resets back to first tab
    } catch (err) {
      setLoaded(false);
    }
  };

  // PUT application (edit)
  const editApplication = async (app) =>{
    console.log(app)
    
    // Render the modal
    // edit 
    
    
    // await axios.put(url + app._id, app);
    // try{
    //   refreshApplications();
    //   setValue(0);
    // } catch(err){
    //   setLoaded(false);
    // }
  }

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
      {/* Pass components to Tabbar */}
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
}

export default UserDashboard;
