
# Full-Stack To-Do Application

## Objective
A full-stack web application built with React and Express.js.
It manages tasks using a RESTful API.

## Technologies
- React.js
- Node.js
- Express.js
- Axios
- CORS
- CSS

## Features
- View all tasks
- Add new tasks
- Prevent duplicate tasks
- Mark tasks as completed or undo completion
- Delete tasks
- Display validation and API error messages

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /todos | Get all tasks |
| POST | /todos | Create a task |
| PUT | /todos/:id | Update a task |
| DELETE | /todos/:id | Delete a task |

## HTTP Status Codes
- 200: Successful update
- 201: Task created
- 204: Task deleted
- 400: Invalid request
- 404: Task not found
- 409: Duplicate task conflict
- 500: Internal server error

## Installation

### Backend
Open a terminal in the project root:

```bash
cd backend
npm install
node server.js
```

### Frontend
Open another terminal in the project root:

```bash
cd frontend
npm install
npm start
```

## URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Data Storage
Tasks are stored in an in-memory array.
Data resets when the backend restarts.
