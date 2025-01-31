// Schema and Model

const mongoose = require('mongoose')


const thingsSchema = mongoose.Schema({
    Title: { type: String },
    Image: { type: String },
    Name: { type: String},
    Category: { type: String},
    Description: { type: String},
})

const Things = mongoose.model('Things', thingsSchema);

module.exports=Things