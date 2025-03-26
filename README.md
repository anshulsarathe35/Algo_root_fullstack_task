#  Task Management Application

This is a **Task Management Web Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**. The application allows users to create, manage, and track their tasks efficiently with features like task creation, updating, and deletion.

---

##  **Project Overview**
The application is designed to showcase full-stack development skills, including:
- RESTful API development using **Node.js & Express**.
- Persistent data storage with **MongoDB**.
- A dynamic and responsive UI using **React**.
- Error handling and API response standardization.
- Deployed frontend and backend with live URLs.

- frontend - 
- backend  - 

---

##  **Features**
✅ Create, edit, and delete tasks.  
✅ Mark tasks as completed or pending.  
✅ View a list of all tasks.  
✅ Error handling for validation and missing resources.  
✅ Interactive UI for smooth task management.

---

##  **Tech Stack**
###  Backend
- **Node.js** + **Express** for server and REST API.
- **MongoDB** for database storage.
- **Mongoose** for MongoDB Object Modeling.
- **Cors** for handling cross-origin requests.
- **dotenv** for environment variables.

###  Frontend
- **React.js** for user interface.
- **Axios** for HTTP requests.
- **Tailwind CSS** for UI styling.

---

##  **Project Structure**
```bash
/task-manager
├── /server
│   ├── /config
│   │   └── db.js
│   ├── /controllers
│   │   └── taskController.js
│   ├── /models
│   │   └── taskModel.js
│   ├── /routes
│   │   └── taskRoutes.js
│   ├── /middleware
│   │   └── errorHandler.js
│   ├── .env
│   └── server.js
└── /client
    ├── /public
    ├── /src
    │   ├── /api
    │   │   └── taskApi.js
    │   ├── /components
    │   │   ├── TaskForm.js
    │   │   └── TaskList.js
    │   ├── App.js
    │   └── server.js
    └── package.json
