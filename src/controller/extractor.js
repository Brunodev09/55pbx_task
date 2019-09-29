const fs = require('fs-extra')
const path = require('path')
const puppeteer = require('puppeteer')
const chance = require('chance').Chance()

const extract = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url)
  await page.waitForResponse(response => response.ok())

  const images = await page.evaluate(() => Array.from(document.images, e => e.src))
  const arr = []
  const arrs = []

  for (let i = 0; i < images.length; i++) {
    const name = chance.string({ length: 30, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' })
    const p = path.resolve(__dirname, `../images/${name}.png`)
    const p2 = `/images/${name}.png`

    try {
      const viewSource = await page.goto(images[i])
      await fs.writeFile(p, await viewSource.buffer())
      arr.push(p)
      arrs.push(p2)
    } catch (e) {}
  }

  return { url: url, images_bd: arr, images_show: arrs }

  await browser.close()
}

module.exports = { extract }
