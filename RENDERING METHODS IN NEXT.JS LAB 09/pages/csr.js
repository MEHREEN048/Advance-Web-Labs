// Import React and the hooks needed for client-side rendering.
import React, { useState, useEffect } from "react";

// This component handles fetching data in the browser.
export default function CSR() {

  // Store the fetched joke.
  const [joke, setJoke] = useState(null);

  // Store the loading status.
  const [loading, setLoading] = useState(true);

  // This effect runs after the page renders.
  useEffect(() => {

    // Fetch a joke from the API in the browser.
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())

      // Save the received joke.
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })

      // Handle any API errors.
      .catch((error) => {
        console.log("Error fetching joke:", error);
        setLoading(false);
      });

  }, []);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Client-Side Rendering (CSR)</h1>

        {loading ? (
          <p>Loading joke...</p>
        ) : joke ? (
          <>
            <p>{joke.setup}</p>
            <h3>{joke.punchline}</h3>
          </>
        ) : (
          <p>Unable to load joke. Please try again.</p>
        )}
      </div>
    </main>
  );
}

// Styling for the CSR page.
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eee5ff, #d9c5f5)",
    padding: "20px",
  },
  card: {
    maxWidth: "550px",
    width: "100%",
    padding: "40px",
    textAlign: "center",
    background: "white",
    borderRadius: "18px",
    boxShadow: "0 8px 25px rgba(60, 30, 90, 0.15)",
    color: "#38234f",
  },
};