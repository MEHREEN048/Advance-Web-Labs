
import React, { useState, useEffect } from "react";

export default function CSR() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching post:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>Client-Side Rendering (CSR)</h1>

        {loading ? (
          <p>Loading post...</p>
        ) : post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3>Post ID: {post.id}</h3>
          </>
        ) : (
          <p>Unable to load post.</p>
        )}
      </div>
    </main>
  );
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
