import { getData, getDocuments } from "../firebase/database.js";
import { pushMessage } from "../line.js";

export async function sendConstellationFortuneToAllLinkUser() {
    const userConstellationList = await getDocuments({ collection: "users" });
    for (const user of userConstellationList.filter(u => u.active)) {
        const data = await getData({ collection: "constellationDaily", doc: user.constellation })
        await pushMessage(user.lineId, {type: 'text', text: `${data.text}`})
    }
}
