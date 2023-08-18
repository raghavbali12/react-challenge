# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge

App.jsx has three components, which need the following:
1. User.jsx -> get userId using API and render userId
2. Header.jsx -> get current time and userInfo (using userId) and only rerender header component when minute changes
3. Items.jsx -> submit items (comma separated values) to updateItem endpoint (which only takes one endpoint at a time, with userId) and then render toast once all endpoints are successfully called.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
