const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({ 
    url: String, 
    images_bd: [String], 
    images_show: [String] 
})

module.exports = mongoose.model('Image',imageSchema)