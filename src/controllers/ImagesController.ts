import { Request, Response } from 'express'

import Images from '../schemas/Images'

class ImagesController {
  public async buscaImagem (req: Request, res: Response): Promise<Response> {
    const images = await Images.find()

    return res.json(images)
  }

  public async registraImagem (req: Request, res: Response): Promise<Response> {
    const images = await Images.create(req.body)

    return res.json(images)
  }
}

export default new ImagesController()
