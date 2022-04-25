import express from "express"
import { fetchAllConstellationDaily } from "./fetch/fetchAllConstellationDaily.js"

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/api/fetch-constellation", async (req, res) => {
    await fetchAllConstellationDaily()
    return res.json();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
