# Task Management Application

This is a MERN (MongoDB, Express, React, Node.js) project for creating and managing tasks. The application provides features for adding, viewing, and managing tasks, along with user authentication, protected routes, and dark mode.

## Features

- **User Authentication:** The application includes user authentication using JWT (JSON Web Tokens) and bcrypt for secure password storage.

- **Task Management:** Users can create tasks with a title and description, view a list of tasks, mark tasks as completed, filter tasks by their completion status, and delete tasks.

- **Dark Mode:** A dark mode feature is implemented, allowing users to toggle between light and dark modes.

## Technologies Used

- **Backend:**
  - MongoDB: Used as the database to store task and user data.
  - Express.js: A Node.js framework to create the backend API endpoints.
  - JSON Web Tokens (JWT): Used for user authentication.
  - Bcrypt: Used to securely hash and store user passwords.

- **Frontend:**
  - React: Used for creating the user interface.
  - Context API: Used for state management and dark mode.
  - Axios: Used for making API requests to the backend.

## Folder Structure

The project is structured into two main folders: `client-side` for the front end and `server` for the back end.

- **`client-side`**: Contains the React-based frontend code and components.
- **`server`**: Contains the Express-based backend code and API endpoints.

## Usage

1. **Clone the Repository:**

   git clone https://github.com/usama7365/Task_Management_Application_MERN.git
   
**2. Install Dependencies:**

Install the required dependencies for both the frontend and backend:

**Frontend dependencies:**
cd client-side
npm install

**Backend dependencies:**
cd ..server
npm install

**3. Start the Backend:**

In the server directory, start the backend server:

npm run server

**4. Start the Frontend:**

In the client-side directory, start the React development server:

npm start


**Contribution:**
Contributions are welcome. Please follow the GitHub workflow and create a pull request for your contributions


**License**
This project is licensed under the Apache License 2.0.



