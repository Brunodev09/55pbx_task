"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');







const ImageSchema = new (0, _mongoose.Schema)({
  url: String,
  name: String,
  adress: String
}, {
  timestamps: true
})

exports. default = _mongoose.model('Image', ImageSchema)
