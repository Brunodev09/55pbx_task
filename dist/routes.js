"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _ImagesController = require('./controllers/ImagesController'); var _ImagesController2 = _interopRequireDefault(_ImagesController);

const routes = _express.Router.call(void 0, )

routes.get('/images', _ImagesController2.default.buscaImagem)
routes.post('/images', _ImagesController2.default.registraImagem)

exports. default = routes
