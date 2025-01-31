const  mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Blogs')
        .then(() => { console.log('Database has been created') })
        .catch((err) => { console.error(err) })
}

module.exports = connect




