import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Explore from './Components/Explore'
import About from './Components/About'
import Contact from './Components/Contact'
import BlogConextProvider from './BlogContext';
import CreateBlog from './pages/CreateBlog';
import BlogInfo from './pages/BlogInfo';
import ReadMore from './pages/ReadMore';
import Edit from './pages/Edit';


const App = () => {



  return (
    <div style={{marginLeft:'4rem',marginRight:'4rem'}}>

      <BlogConextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/explore' element={<Explore />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/create-blog' element={<CreateBlog/>}></Route>
            <Route path='/blog-info' element={<BlogInfo/>}></Route>
            <Route path='/read-more/:id' element={<ReadMore/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
          </Routes>
        </Router>



      </BlogConextProvider>

    </div>
  )
}

export default App