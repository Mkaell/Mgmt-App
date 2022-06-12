# [Mgmt-App](https://mgmt-app.vercel.app/)
Full stack GraphQL, Express &amp; React app

### _Technologies used:_ 
- Application wrote with **React**.
- **MUI** React framework used to add ready-made components.
- **react-router-dom** was used for dynamic routing in the web application.
- **GraphQL** is a query language for APIs.
- The project uses a **MongoDB** database.
- **ORM** - **mongoose**.
- There is an adaptation for all devices.

### Dependencies used on server:
```
"dependencies": {
    "colors": "^1.4.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "express-graphql": "^0.12.0",
    "graphql": "^16.5.0",
    "mongoose": "^6.3.6"
  },
  "devDependencies": {
    "dotenv": "^16.0.1",
    "nodemon": "^2.0.16"
  }
```
### Dependencies used on client:
```
    "@apollo/client": "^3.6.7",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "graphql": "^16.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
```

## Installation

Install all the necessary packages from package.json

```bash
npm install
```
## GraphQL Queries & Mutations
These are the GraphQL queries and mutations for the YouTube course.

Get names of all clients
```bash
{
  clients {
    name
  }
}
```

Get a single client name and email
```bash
{
  client(id: 1) {
    name
    email
  }
}
```

Get name and status of all projects
```bash
{
  projects {
    name
    status
  }
}
```

Get a single project name, description along with the client name and email
```bash
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```

Create a new client and return all data
```bash
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```

Delete a client and return id
```bash
mutation {
  deleteClient(id: 1) {
    id
  }
}
```

Create a new project and return name and description
```bash
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}
```

Update a project status and return name and status
```bash
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```
