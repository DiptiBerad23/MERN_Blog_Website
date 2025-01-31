const express = require('express')
const { getThings, addThings, updateThings, deleteThings,upload, getById } = require('../contoller/thingsController')



const router = express.Router()


//Routes


router.get('/',getThings)

router.post('/add',upload.single('Image'),addThings)

router.put('/update/:id', upload.single('Image'), updateThings);

router.delete('/delete/:id', deleteThings)
  
router.get('/read/:id',getById)




module.exports = router