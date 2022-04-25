import { saveData } from "../firebase/database.js";
import { replyMessage } from "../line.js";

export async function settingConstellationToUser(event, parse) {
    await saveData({
        collection: "users",
        doc: event.source.userId,
        data: {
            lineId: event.source.userId,
            constellation: parse.value,
            label: parse.label,
            active: true
        }})
    await replyMessage(event.replyToken, {
        type: 'text',
        text: `設定${parse.label}完成，每天8:00將會傳運勢給你唷😬`
    });
}
