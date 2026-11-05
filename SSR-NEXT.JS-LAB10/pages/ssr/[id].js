import React from "react";

export default function DynamicSSR({ post }) {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Dynamic Server-Side Rendering</h1>

        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <h3>Post ID: {post.id}</h3>
        <p>User ID: {post.userId}</p>
      </div>
    </main>
  );
}

// Fetch the post on every request using its dynamic ID
export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return { notFound: true };
  }

  const post = await response.json();

  return {
    props: {
      post,
    },
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