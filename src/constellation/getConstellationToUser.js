import { constellationMap } from "../const/constellationMap.js";
import { getData } from "../firebase/database.js";
import { replyMessage } from "../line.js";

export async function getConstellationToUser(event, userText) {
    const constellation = constellationMap.get(userText)
    const data = await getData({ collection: "constellationDaily", doc: constellation })
    await replyMessage(event.replyToken, {
        type: 'text', text: `${data.text}`
    })
}
