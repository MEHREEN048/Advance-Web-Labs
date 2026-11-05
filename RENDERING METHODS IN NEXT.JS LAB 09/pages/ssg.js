// Import React to create the SSG page.
import React from "react";

// This component displays the statically generated joke.
export default function SSG({ joke }) {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Static Site Generation (SSG)</h1>

        <p>{joke.setup}</p>

        <h3>{joke.punchline}</h3>

        <p>Page regenerates after 60 seconds.</p>
      </div>
    </main>
  );
}

// This function generates the page at build time.
export async function getStaticProps() {
  // Fetch a joke from the external API.
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  // Convert the response into JavaScript data.
  const joke = await response.json();

  // Pass the joke to the page and regenerate after 60 seconds.
  return {
    props: { joke },
    revalidate: 60,
  };
}

// Styling for the SSG page.
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