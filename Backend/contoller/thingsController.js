const Things = require('../models/things')


const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Specify the directory to store files
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname)); // Append unique timestamp to the filename
  },
});

exports.upload = multer({storage:storage});

exports.getThings = async (req, res) => {
    try {
      
      const things = await Things.find();
      res.status(200).json({ message: things });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }


  exports.addThings = async (req, res) => {
    try {
      const { Title, Name, Category, Description } = req.body;
      const imagePath = req.file ? `/images/${req.file.filename}` : '';
  
      if (!Title || !Name || !Category || !Description) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const things = new Things({
        Title,
        Name,
        Image: imagePath,
        Category,
        Description,
      });
  
      await things.save();
      res.status(201).json({ message: 'Your blog is created successfully', data: things });
    } catch (error) {
      res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
  };
  
  exports.updateThings = async (req, res) => {
    const { id } = req.params;
    const { Title, Name, Category, Description } = req.body;
    
    // Handle the file upload
    const imagePath = req.file ? `/images/${req.file.filename}` : null; // Get the new image path if a file is uploaded
    
    // Prepare the update object
    const updateData = {
      Title,
      Name,
      Category,
      Description,
    };
    
    if (imagePath) {
      updateData.Image = imagePath; // Update the Image field if a new file is uploaded
    }
  
    try {
      const updatedThing = await Things.findByIdAndUpdate(id, updateData, { new: true }); // Get the updated document
      if (!updatedThing) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.status(200).json({ message: 'Blog updated successfully', data: updatedThing });
    } catch (error) {
      res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
  };
  


exports.deleteThings = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Things.findByIdAndDelete(id);
      res.status(200).json({ message: 'deleted' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  

  exports.getById = async (req, res) => {
    try {
        const thing = await Things.findById(req.params.id); // Fetch the specific blog by ID
        if (!thing) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(thing); // Return the blog data as JSON
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
  