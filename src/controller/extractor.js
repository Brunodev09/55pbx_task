const fs        = require( 'fs-extra' );
const path        = require( 'path' );
const rp        = require( 'request-promise' );
const puppeteer = require( 'puppeteer' );
const chance = require('chance').Chance();


const extract =  async (url) => {
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();


    await page.goto(url);
    await page.waitForResponse(response => response.ok())
    const images = await page.evaluate( () => Array.from( document.images, e => e.src ) );
    let arr = []
    let arrs = []
    for ( let i = 0; i < images.length; i++ )
    {
        
        let name = chance.string({length:30,pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'})
        let p = path.resolve(__dirname,`../images/${name}.png`);
        let p2 = `/images/${name}.png`;
       try{
            let viewSource = await page.goto(images[i]);
            await fs.writeFile(p, await viewSource.buffer())
            arr.push(p)
            arrs.push(p2)
       }catch(e){}
       

    }
    return {url:url,images_bd:arr,images_show:arrs};
    await browser.close();
}

module.exports = {extract}