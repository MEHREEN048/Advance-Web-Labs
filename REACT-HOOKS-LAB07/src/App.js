import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import "./App.css";

function App() {
  // Task 1: useState - Counter
  const [count, setCount] = useState(0);

  // Task 2: useEffect - Fetch User Data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  // Task 3: useContext - Theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Task 4: useContext - Authentication
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const selectedUser = users[0];

  return (
    <div className={`app ${theme}`}>
      <h1>React Hooks Dashboard</h1>

      {/* Counter Section */}
      <section className="card">
        <h2>Task 1: useState Counter</h2>

        <h3>Count: {count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </section>

      {/* Theme Section */}
      <section className="card">
        <h2>Task 2: Theme Switching</h2>

        <p>Current Theme: {theme}</p>

        <button onClick={toggleTheme}>
          Switch Theme
        </button>
      </section>

      {/* Authentication Section */}
      <section className="card">
        <h2>Task 3: User Authentication</h2>

        <button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Logout" : "Login"}
        </button>

        {loggedIn && (
          <div>
            {loading ? (
              <p>Loading user data...</p>
            ) : selectedUser ? (
              <>
          <h3>Welcome, Mehreen!</h3>
          <p>Logged in as: {selectedUser.name}</p>
        </>
            ) : (
              <p>Unable to load user data.</p>
            )}
          </div>
        )}
      </section>

    </div>
  );
}

export default App;