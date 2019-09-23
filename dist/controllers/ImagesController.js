"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});

var _Images = require('../schemas/Images'); var _Images2 = _interopRequireDefault(_Images);

class ImagesController {
   async buscaImagem (req, res) {
    const images = await _Images2.default.find()

    return res.json(images)
  }

   async registraImagem (req, res) {
    const images = await _Images2.default.create(req.body)

    return res.json(images)
  }
}

exports. default = new ImagesController()
