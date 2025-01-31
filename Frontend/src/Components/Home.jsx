import React, { useEffect, useState } from "react";
import "./Home.css";
import background from "../assets/background.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlogInfo from "../pages/BlogInfo";

const Home = () => {
  // Fetch blogs from database
  const [blogs, setBlogs] = useState([]);

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

  // Slice to show only 6 blogs
  const latestBlogs = blogs.slice(0, 6);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create-blog");
  };

  return (
    <>
      <div
        className="container container-fluid d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          
        }}
      >
        <div className="row text-light w-100">
          <div className="col-12">
            <h1 className="display-4 fw-bold text-dark">Welcome to My Blog</h1>
            <p className="fs-5 text-dark">
              Share your thoughts, stories, and ideas with the world!
            </p>
            <button
  className="btn btn-danger btn-lg btn-sm"
  style={{
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#f04e23",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "#d23c00"} // Change background on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = "#f04e23"} // Reset background color
  onClick={handleNavigate}
>
  Create Blog
</button>

          </div>
        </div>
      </div>
<h1 className="hover-heading">
  Trending Blogs
</h1>

    <div style={{marginLeft:'6rem'}}>
      

      {/* Display only 6 blogs */}
      <BlogInfo blogs={latestBlogs} />

      {/* Button to navigate to Explore Page */}
      <div className="text-center mt-4">
 <br /><br />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
