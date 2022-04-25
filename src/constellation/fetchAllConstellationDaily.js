import { constellationMap } from "../const/constellationMap.js";
import { fetchConstellation } from "./fetchConstellation.js";
import { saveData } from "../firebase/database.js";

export async function fetchAllConstellationDaily() {
    for (const value of constellationMap.values()) {
        const text = await fetchConstellation(value);
        const data = {
            constellation: value,
            text,
            generateAt: new Date()
        };
        await saveData({ collection: "constellationDaily", doc: data.constellation, data });
    }
}
