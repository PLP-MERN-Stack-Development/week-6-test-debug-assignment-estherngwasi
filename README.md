# MERN Bug Tracker

A full-stack bug tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates comprehensive testing, debugging, and error handling best practices for a modern web application.

---

## Features
- Report new bugs
- View all reported bugs
- Update bug statuses (open, in-progress, resolved)
- Delete bugs
- Robust error handling (frontend and backend)
- Unit, integration, and end-to-end (E2E) tests

---

## Project Structure
```
week6/
  client/
    src/
      components/
      tests/
        unit/
        integration/
    cypress/
  server/
    src/
      controllers/
      models/
      routes/
      middleware/
    tests/
      unit/
      integration/
  jest.config.js
  README.md
  Week6-Assignment.md
```

---

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```
git clone <your-repo-url>
cd week6
```

### 2. Install Dependencies
#### Backend
```
cd server
npm install
```
#### Frontend
```
cd ../client
npm install
```

### 3. Configure MongoDB Atlas
- Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Add your current IP to the Network Access whitelist
- Create a database user and password
- Get your connection string (should start with `mongodb+srv://`)
- In `server/.env`, add:
  ```
  MONGO_URI=your-mongodb-atlas-connection-string
  ```

### 4. Start the Application
#### Backend
```
cd server
npm start
```
#### Frontend
```
cd client
npm start
```
- The frontend will open at [http://localhost:3000](http://localhost:3000)
- The backend runs at [http://localhost:5000](http://localhost:5000)

---

## Testing

### Backend
- **Unit & Integration Tests:**
  ```
  cd server
  npm test
  ```

### Frontend
- **Unit & Integration Tests:**
  ```
  cd client
  npm test
  ```

### End-to-End (E2E) Tests
- **Cypress:**
  ```
  cd client
  npx cypress open
  ```

### Code Coverage
- Run `npm test -- --coverage` in both `client` and `server` to generate coverage reports.
- Coverage reports will be available in the `coverage/` folder.

---

## Debugging & Troubleshooting

### Common Issues
- **Frontend cannot fetch bugs:**
  - Make sure the backend is running on port 5000.
  - Ensure `client/package.json` contains: `"proxy": "http://localhost:5000"`
  - Restart the React app after adding the proxy.
- **MongoDB Atlas connection errors:**
  - Double-check your `.env` connection string.
  - Make sure your IP is whitelisted in Atlas.
  - Use Node.js v18 or higher.
  - Remove deprecated options from `mongoose.connect`.
  - Try `set NODE_OPTIONS=--tls-min-v1.2` if on Windows and see TLS errors.
- **App not starting:**
  - Ensure `client/public/index.html` and `client/src/index.js` exist.
  - Ensure all dependencies are installed.

### Debugging Techniques Used
- Console logs in both frontend and backend
- Chrome DevTools for inspecting network requests and React state
- Node.js inspector for backend debugging
- React error boundaries for UI error handling
- Express error middleware for backend error handling

---

## Assignment Deliverables
- [x] Unit, integration, and E2E tests
- [x] MongoDB Atlas integration
- [x] Error handling and debugging
- [x] Documentation and troubleshooting

---

## Screenshots
_Add screenshots of your app and test coverage here before submission._

---

## Summary
This project demonstrates a complete, tested, and debugged MERN stack application. If you encounter any issues, review the troubleshooting section or reach out for help! 