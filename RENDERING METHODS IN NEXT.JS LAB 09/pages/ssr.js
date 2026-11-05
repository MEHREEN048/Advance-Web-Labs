// Import React so we can create a page component.
import React from "react";

// This component displays the joke received from the server.
export default function SSR({ joke }) {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Server-Side Rendering (SSR)</h1>

        <p>{joke.setup}</p>

        <h3>{joke.punchline}</h3>

        <button onClick={() => window.location.reload()}>
          Get New Joke
        </button>
      </div>
    </main>
  );
}

// This function runs on the server whenever a request is made.
export async function getServerSideProps() {
  // Fetch a random joke from the external API.
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  // Convert the API response into JavaScript data.
  const joke = await response.json();

  // Send the fetched joke to the page as props.
  return {
    props: { joke },
  };
}

// These styles design the SSR page.
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