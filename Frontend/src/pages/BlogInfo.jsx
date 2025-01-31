import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogInfo = ({ blogs = [] }) => {
  // State for hover effect
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      {/* Display Blogs */}
      {blogs.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5rem", marginRight: "2rem" }}>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="card"
              onMouseEnter={() => setHoveredCard(blog._id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: "18rem",
                boxShadow: hoveredCard === blog._id 
                  ? "0 6px 12px rgba(0, 0, 0, 0.2)" 
                  : "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                transform: hoveredCard === blog._id ? "translateY(-10px)" : "none",
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  paddingTop: "20px",
                  color: "black",
                }}
              >
                {blog.Title}
              </h4>
              <img
                src={`http://localhost:4000${blog.Image}`}
                alt={blog.Title}
                style={{
                  height: "12rem",
                  width: "100%",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  borderRadius: "8px",
                }}
              />
              <div style={{ textAlign: "center" }} className="card-body">
                <h2 style={{ fontSize: "23px" }}>{blog.Name}</h2>
                <p style={{ fontSize: "15px" }}>{blog.Category}</p>
                <Link to={`/read-more/${blog._id}`}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
          No blogs available in this category.
        </p>
      )}
    </div>
  );
};

export default BlogInfo;
