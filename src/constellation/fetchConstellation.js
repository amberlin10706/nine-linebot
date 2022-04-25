import cheerio from "cheerio";
import request from "request";

export function fetchConstellation(constellation) {
    return new Promise((resolve, reject) => {
        request({
                url: `https://www.daily-zodiac.com/mobile/zodiac/${constellation}`,
                method: "GET"
            },
            async function (error, response, body) {
                if (error || !body) {
                    reject(error)
                }
                const $ = cheerio.load(body);

                const constellation = $("p.name").text().trim();
                const date = $("ul.today > li:nth-child(2)").text().trim();
                const weather = $("ul.today > li:nth-child(3) > span").text().trim();
                const fortune = $("article").text().trim();

                const text = `${constellation}\n${date} ${weather}\n\n${fortune}`;
                resolve(text);
            });
    })
}
