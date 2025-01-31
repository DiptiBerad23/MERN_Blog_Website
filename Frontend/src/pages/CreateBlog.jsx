import React, { useState } from 'react';
import axios from 'axios';
import Explore from '../Components/Explore';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [Title, setTitle] = useState('');
  const [Image, setImage] = useState('');
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const navigate = useNavigate();
  //const navigate1 = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Image', Image);
    formData.append('Name', Name);
    formData.append('Category', Category);
    formData.append('Description', Description);

    try {
      const response = await axios.post('http://localhost:4000/api/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Inserted successfully!');
      navigate('/explore');
      
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Failed to insert.Fill all fields');
    }
  };


  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4 fw-bold">CREATE BLOG</h2>
      <form onSubmit={sendData} className="mx-auto p-4 border rounded shadow-lg" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Blog Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter Blog Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Author Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            placeholder="Enter Author Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Choose Image</label>
          <input
            type="file"
            name="Image"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
            id="image"
          />
        </div>
        <div className="mb-3">
          <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
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
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter Blog Description"
          ></textarea>
        </div>
        <div className="row">
  <div className="col d-flex gap-2">
    <a href='/' className="btn btn-primary flex-fill">Back</a>
    <button type="submit" className="btn btn-primary flex-fill">Publish Blog</button>
  </div>
</div>

      </form><br /><br />
    </div>
  );
};

export default CreateBlog;
