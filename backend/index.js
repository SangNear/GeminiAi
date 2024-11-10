const express = require("express");
const ImageKit = require('imagekit');
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const chat = require("./models/chat");
const port = process.env.PORT || 5000
const app = express()


app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use(express.json())

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("DB Connection Successfully!");

    } catch (error) {
        console.log(error);

    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.post("/api/chats", (req, res) => {
    const { text } = req.body
    try {
       chat
   } catch (error) {

    }

})


app.listen(port, () => {
    connectDb()
    console.log("Server running on http://localhost:5000");
})

