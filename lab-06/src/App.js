import React, { useContext } from "react";
import "./App.css";

import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { increment, decrement } from "./redux/actions";

import { UserContext, UserProvider } from "./context/UserContext";

// User Profile Component
const UserProfile = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div className="user-section">
      <h2>User Information</h2>

      <h3>Welcome, {user}!</h3>

      {user === "Guest" ? (
        <button className="login-btn" onClick={login}>
          Login
        </button>
      ) : (
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

// Counter Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-section">
      <h2>Redux Counter</h2>

      <div className="count">{count}</div>

      <button
        className="counter-btn"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        className="counter-btn"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

// Main App
const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="app">
          <h1>Tasks Combined State-Management</h1>

          <div className="container">
            <UserProfile />
            <Counter />
          </div>
        </div>
      </UserProvider>
    </Provider>
  );
};

export default App;

