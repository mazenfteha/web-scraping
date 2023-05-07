const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://www.imdb.com/title/tt0137523/';

(async ()=>{

    const response = await request(URL);

    let $ = cheerio.load(response);
    let title = $('span[class="sc-afe43def-1 fDTGTb"]').text()
    let rating = $('span[class="sc-bde20123-1 iZlgcd"]').text()

    console.log(title, rating)
})()