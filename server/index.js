const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const route = require('./routes')
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database Connected!!!"))
    .catch((err) => console.log(err))


app.use(express.json());
app.use(cors({ credentials: true, origin: true }))

app.use('/api', route)

app.listen(5000, () => {
    console.log(`Server listening on 5000`)
})
