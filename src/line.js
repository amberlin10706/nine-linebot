import line from "@line/bot-sdk";
import { lineConfig } from "../config/lineConfig.js";

const client = new line.Client(lineConfig)

export async function pushMessage(key, message) {
    await client.pushMessage(key, message);
}
