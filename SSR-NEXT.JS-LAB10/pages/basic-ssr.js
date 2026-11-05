import React from "react";

// Display the joke received from the server
export default function BasicSSR({ joke }) {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Basic Server-Side Rendering</h1>

        <p>{joke.setup}</p>
        <h3>{joke.punchline}</h3>

        <button onClick={() => window.location.reload()}>
          Get Another Joke
        </button>
      </div>
    </main>
  );
}

// This function runs on the server for every request
export async function getServerSideProps() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  const joke = await response.json();

  return {
    props: {
      joke,
    },
  };
}

// Styling for the page
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