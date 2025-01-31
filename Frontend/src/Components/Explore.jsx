import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogInfo from "../pages/BlogInfo";
import Footer from "./Footer";

const Explore = () => {
  // State to store blogs
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch all blogs
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/");
      console.log(res.data);
      setBlogs(res.data.message || []); // Ensure blogs is always an array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Get unique categories from blogs
  const categories = ["All", ...new Set(blogs.map(blog => blog.Category))];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.Category === selectedCategory);

  return (
    <>
      <div style={{ marginLeft: "7rem", marginRight: "2rem", gap: '20px' }} id="explore">
        <br />
        <h1
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "revert-layer",
          }}
        >
          Explore All Blogs Here
        </h1>
        <br />
        <br />

        {/* Category Filter Buttons (only in Explore) */}
        <div style={{ textAlign: "center", marginBottom: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "10px 15px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                backgroundColor: selectedCategory === category ? "#007bff" : "#f0f0f0",
                color: selectedCategory === category ? "white" : "black",
                transition: "background-color 0.3s ease",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pass filtered blogs to BlogInfo */}
        <BlogInfo blogs={filteredBlogs} />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Explore;
