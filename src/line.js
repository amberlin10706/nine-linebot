import line from "@line/bot-sdk";
import { lineConfig } from "../config/lineConfig.js";
import querystring from "querystring";
import { constellationMap } from "./const/constellationMap.js";
import { settingConstellationTemplate } from "./template/settingConstellationTemplate.js";
import { settingConstellationToUser } from "./constellation/settingConstellationToUser.js";
import { getConstellationToUser } from "./constellation/getConstellationToUser.js";

const client = new line.Client(lineConfig)

export async function pushMessage(key, message) {
    await client.pushMessage(key, message);
}

export async function replyMessage(replyToken, message) {
    await client.replyMessage(replyToken, message);
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
            await getConstellationToUser(event, userText)
            return
        }

        await client.replyMessage(event.replyToken, message);
    }

    if (event.type === "postback") {
        const parse = querystring.parse(event.postback.data)

        if (parse.action === "constellation") {
            await settingConstellationToUser(event, parse)
            return
        }

        await client.replyMessage(event.replyToken, {
            type: 'text', text: `你想幹嘛`
        });
    }
}
