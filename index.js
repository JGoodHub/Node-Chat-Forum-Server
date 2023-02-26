const databaseService = require("./src/databaseService")
const express = require("express");
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.post("/messages", (req, res) =>
{
    console.log("Message Recieved");
    console.log(req.body);

    databaseService.StoreMessage(req.body);

    res.sendStatus(201);
});


app.get("/messages", (req, res) =>
{
    const messages = databaseService.FetchMessages();

    res.status(200);
    res.type('application/json');
    res.json(messages);
    res.end();
});



app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}!`);
});
