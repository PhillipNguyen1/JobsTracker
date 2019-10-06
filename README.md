Note: 
  - The 'config' folder, which holds information such as the database connection string, is ignored by git. 
  - To run, you will need to create your own 'config' folder with a default.json file to store 
    the database connection string (refer to Phillip or Alex lol)
  - Database connection string will look like this:
      
      - mongodb+srv://{username}:{password}@... 

Steps to run program:
  1) Navigate to root directory and run "npm install" to install dependencies (required packages). 
     The list of dependecies are stored in package.json.
  2) Package.json will also store scripts you can make to make it easier to run commands. 
     Example: under "scripts", you will find "start" "server", & "client". 
     commands are executed following this format "npm run [script name here]". i.e: "npm run server" will start the server etc..
  4) To test out the endpoints (localhost:4000/api/applications), you must also be connected to mongoDB through the database
     connection string (Phillip or Alex can help you set that up)
  5) Run "npm run server" to start the server. This will run on port 4000 on your local machine for now (localhost:4000). 
     This should also connect you to mongoDB and you should see 2 things in the terminal

      - Server is running on PORT: 4000
      - Connected to database {database connection string here}

  6) If you have the server running and are connected to mongoDB, you will be able to reach "http://localhost:4000/api/applications"
     Browsers will automatically make a GET request and this should return you the list of applications in the database
  7) If you want to try out the other endpoints (GET/POST/PUT/DELETE), download "Postman" and 
     I can share you a folder within Postman where you can make those requests!
