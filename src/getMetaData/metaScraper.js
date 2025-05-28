const got=require('got');
const puppeteer=require('puppeteer');
const cheerio=require('cheerio');
const metascraper=require('metascraper')([
    require('metascraper-title')(),
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-publisher')()
]);
async function getMetaScraper(url){
    let html;
    try{
        const response=await got(url,{
            headers:{
                'User-Agent': 'Mozilla/5.0',
                'Accept-Language': 'en-Us,en;q=0.9',
                'Accept': 'text/html'
            },
            timeout:50000
        });
        html=response.body;
    }
    catch(error){
      const browser=await puppeteer.launch({headless:true});
      const page=await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
      await page.goto(url,{waitUntil:'domcontentloaded',timeout:10000});
      html=await page.content();
      await browser.close();  

    }
    const metadata=await metascraper({html,url});
    let title=metadata.title||null;
    let author=metadata.author||null;
    let publisher=metadata.publisher||null;
    let date=metadata.date||null;
    if(!author){
        const $=cheerio.load(html);
        author=$('.byline','.written','.written by').text();
    }
    console.log(metadata);
    return {title,author,publisher,date,type:"web",url};
}

/*TEST:
getMetaScraper();
*/

module.exports=getMetaScraper;
