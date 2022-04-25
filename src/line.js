import line from "@line/bot-sdk";
import { lineConfig } from "../config/lineConfig.js";
import querystring from "querystring";
import { constellationMap } from "./const/constellationMap.js";
import { getData, saveData } from "./firebase/database.js";
import { settingConstellationTemplate } from "./template/settingConstellationTemplate.js";

const client = new line.Client(lineConfig)

export async function pushMessage(key, message) {
    await client.pushMessage(key, message);
}

export async function handleLineReply(event) {
    console.log(event)

    if (event.type === "message") {
        const userText = event.message.text;
        let message = { type: 'text', text: `你說${userText}` };

        if (userText === "設定星座") {
            message = settingConstellationTemplate
        }

        if (constellationMap.has(userText)) {
            const constellation = constellationMap.get(userText)
            const data = await getData({ collection: "constellationDaily", doc: constellation })
            message = {type: 'text', text: `${data.text}`};
        }

        await client.replyMessage(event.replyToken, message);
    }

    if (event.type === "postback") {
        const parse = querystring.parse(event.postback.data)

        if (parse.action === "constellation") {
            await saveData({
                collection: "users",
                doc: event.source.userId,
                data: {
                    lineId: event.source.userId,
                    constellation: parse.value,
                    label: parse.label,
                    active: true
                }})
            await client.replyMessage(event.replyToken, {
                type: 'text',
                text: `設定${parse.label}完成，每天8:00將會傳運勢給你唷😬`
            });
        }

    }
}
