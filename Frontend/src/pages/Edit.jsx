import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams(); // Get the blog ID from URL parameters
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    Title: '',
    Image: '',
    Name: '',
    Category: '',
    Description: ''
  });

  // Fetch the blog data for the given id
  const fetchBlogData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/read/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    fetchBlogData(); // Fetch the blog data when the component mounts
  }, [id]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value // Dynamically update the corresponding field in the state
    });
  };

  // Handle image file input changes
  const handleImageChange = (e) => {
    setBlog({
      ...blog,
      Image: e.target.files[0] // Store the selected image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('Title', blog.Title);
    if (blog.Image) {
      formData.append('Image', blog.Image); // Append the image if it's changed
    }
    formData.append('Name', blog.Name);
    formData.append('Category', blog.Category);
    formData.append('Description', blog.Description);
  
    try {
      const response = await axios.put(`http://localhost:4000/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Blog updated successfully!');
      navigate(`/explore`); // Redirect after successful update
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update the blog');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="mx-auto p-4 border rounded" style={{ maxWidth: '600px', boxShadow: '0 4px 12px rgba(0, 0.3, 0, 0.4)' }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Blog Title</label>
          <input
            type="text"
            name="Title"
            className="form-control"
            id="title"
            value={blog.Title}
            onChange={handleChange}
            placeholder="Enter Blog Title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Author Name</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            id="name"
            value={blog.Name}
            onChange={handleChange}
            placeholder="Enter Author Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Choose Image</label>
          <input
            type="file"
            name="Image"
            className="form-control"
            id="image"
            onChange={handleImageChange}
          />
          {blog.Image && <img src={`http://localhost:4000${blog.Image}`} alt="Current Blog" style={{ width: '150px', marginTop: '10px' }} />}
        </div>

        <div className="mb-3">
          <select
            name="Category"
            className="form-select"
            value={blog.Category}
            onChange={handleChange}
          >
            <option value="">Select Blog Category</option>
            <option value="Technical Blog">Technical Blog</option>
            <option value="Food Blog">Food Blog</option>
            <option value="Travel Blog">Travel Blog</option>
            <option value="LifeStyle Blog">LifeStyle Blog</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Blog Description</label>
          <textarea
            name="Description"
            className="form-control"
            id="description"
            rows="4"
            value={blog.Description}
            onChange={handleChange}
            placeholder="Enter Blog Description"
          ></textarea>
        </div><br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/read-more/${id}`} style={{ textDecoration: 'none', width: '48%' }}>
            <button 
              type="button" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
            >
              Back
            </button>
          </Link>
          <button type="submit" className="btn btn-primary" style={{ width: '48%' }}>Update Blog</button>
        </div>
      </form><br /><br /><br />
    </div>
  );
};

export default Edit;
