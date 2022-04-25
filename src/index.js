import express from "express"
import { fetchAllConstellationDaily } from "./constellation/fetchAllConstellationDaily.js"
import { sendConstellationFortuneToAllLinkUser } from "./constellation/sendConstellationFortuneToAllLinkUser.js";

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
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
