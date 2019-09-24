import { Request, Response } from 'express'
import fs from 'fs'
import https from 'https'
import puppeteer from 'puppeteer'
import chance from 'chance'

import Images from '../schemas/Images'

class ImagesController {
  public async buscaImagem (req: Request, res: Response): Promise<Response> {
    const file = fs.createWriteStream(req.body.destination)

    https.get(req.body.url, response => {
      response.pipe(file)

      file.on('Finish', () => {
        file.close(res.ok())
      })
    })

    const images = await Images.find()

    return res.json(images)
  }

  public async registraImagem (req: Request, res: Response): Promise<Response> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    let result

    await page.goto(req.body.url)
    await page.waitForResponse(response => response.ok())
    const images = await page.evaluate(() => Array.from(document.images, e => e.src))

    const arr = []
    const arrs = []

    for (let i = 0; i < images.length; i++) {
      const name = chance.string({ length: 30, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' })
      const p = `../../public/images/${name}.png`
      const p2 = `../../public/images/${name}.png`
    }

    const images = await Images.create(req.body)

    return res.json(images)
  }
}

export default new ImagesController()
