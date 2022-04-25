import express from "express"
import { fetchAllConstellationDaily } from "./constellation/fetchAllConstellationDaily.js"
import { sendConstellationFortuneToAllLinkUser } from "./constellation/sendConstellationFortuneToAllLinkUser.js";
import { handleLineReply } from "./line.js";
import line from "@line/bot-sdk";
import { lineConfig } from "../config/lineConfig.js";

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/api/line/callback", line.middleware(lineConfig), async (req, res) => {
    const events = req.body.events;
    events[0] && await handleLineReply(events[0]);
    return res.json();
})

app.get("/api/fetch-constellation", async (req, res) => {
    await fetchAllConstellationDaily()
    return res.json();
})

app.get("/api/start", async (req, res) => {
    await fetchAllConstellationDaily()
    await sendConstellationFortuneToAllLinkUser()
    return res.json();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
