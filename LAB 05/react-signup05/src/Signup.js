
import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    if (name.trim() === "") {
      setMessage("Please enter your name!");
    } else {
      setMessage(`Welcome, ${name}! Your sign-up is successful.`);
    }
  };

  return (
    <div className="signup">
      <h2>Create Your Account</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSignup}>Sign Up</button>

      <p>{message}</p>
    </div>
  );
}

export default Signup;
