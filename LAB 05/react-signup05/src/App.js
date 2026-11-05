
import React from "react";
import Signup from "./Signup";
import ContactList from "./ContactList";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>ConnectHub</h1>

      <div className="layout">
        <ContactList />

        <div className="main-content">
          <Signup />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
