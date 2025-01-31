import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ReadMore = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Extract the blog ID from URL params
    const navigate = useNavigate();

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/read/${id}`);
            setBlog(res.data); // Set the blog data in state
        } catch (error) {
            console.error('Error fetching blog data:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        fetchBlog(); // Fetch blog on component mount
    }, [id]);

    const handleEditClick = () => {
        navigate(`/edit/${id}`, { state: { blog } }); // Navigate to the edit page and pass the blog data
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/delete/${id}`);
            alert('Blog deleted successfully');
            navigate('/explore'); // Redirect after successful deletion
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('Failed to delete the blog');
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Show loading state while data is being fetched
    }

    if (!blog) {
        return <p>Blog not found!</p>; // Show error if blog doesn't exist
    }

    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0.3, 0, 0, 0.7)',
            maxWidth: '70%',
            margin: '0 auto',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '36px',
                fontWeight:'bold',
                color: '#2a2a2a',
                marginBottom: '20px'
            }}>
                {blog.Title}
            </h1>
            <img 
                src={`http://localhost:4000${blog.Image}`} 
                alt={blog.Title} 
                style={{
                    width: '50%',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    height:'20rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }} 
            />
            <h2 style={{
                fontSize: '20px',
                color: '#555',
                marginBottom: '20px'
            }}>
                {blog.Category} by <strong>{blog.Name}</strong>
            </h2>
            <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#666',
                marginBottom: '30px'
            }}>
                {blog.Description}
            </p>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <a href="/explore"  style={{
                        padding: '12px 25px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        textDecoration:'none'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
                    >Back</a>

                <button 
                    onClick={handleEditClick} 
                    style={{
                        padding: '12px 25px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: 'green',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'darkGreen'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'green'}
                >
                    Edit Blog
                </button>
                <button 
                    onClick={handleDeleteClick} 
                    style={{
                        padding: '12px 25px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#DC3545',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#DC3545'}
                >
                    Delete Blog
                </button>
            </div>
        </div><br /><br /><br />
       </>
    );
};

export default ReadMore;
