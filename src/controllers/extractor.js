const fs = require('fs')
const https = require('https')
const puppeteer = require('puppeteer')
const chance = require('chance')

const download = (url, destination) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(destination)

  https.get(url, response => {
    response.pipe(file)

    file.on('finish', () => {
      file.close(resolve(true))
    })
  }).on('error', error => {
    fs.unlink(destination)
    reject(error.message)
  })
})

const extract = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  let result

  await page.goto(url)
  await page.waitForResponse(response => response.ok())

  const images = await page.evaluate(() => Array.from(document.images, e => e.src))

  const arr = []
  const arrs = []

  for (const i in images.length) {
    const name = chance.toString({ length: 20, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' })
    const p = `/public/images/${name}.png`
    const p2 = `/public/images/${name}.png`
    result = await download(images[i], p)

    if (result !== true) {
      console.error(result)
    } else {
      arr.push(p)
      arrs.push(p2)
    }
  }

  return { url: url, images_bd: arr, images_show: arrs }
}

module.exports = { extract }
