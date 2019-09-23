import { Router } from 'express'
import ImagesController from './controllers/ImagesController'

const routes = Router()

routes.get('/images', ImagesController.buscaImagem)
routes.post('/images', ImagesController.registraImagem)

export default routes
