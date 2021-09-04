const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const route = require('./routes')
dotenv.config();

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database Connected!!!"))
    .catch((err) => console.log(err))


app.use(express.json());
app.use(cors({ credentials: true, origin: true }))

app.use('/api', route)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello from heroku")
})
