
import React from "react";

export default function SSG({ post }) {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Static Site Generation (SSG)</h1>

        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <h3>Post ID: {post.id}</h3>
        <p>This page is generated at build time.</p>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

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
    maxWidth: "600px",
    width: "100%",
    padding: "40px",
    textAlign: "center",
    background: "white",
    borderRadius: "18px",
    boxShadow: "0 8px 25px rgba(60, 30, 90, 0.15)",
    color: "#38234f",
  },
};
