const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    Title: {
        type: String,
        max: 50,
        required: true
    },
    Body: {
        type: String,
        max: 10,
        required: true
    },
    Likes: {
        type: Number,
    }
})
BlogSchema.index({ '$**': 'text' })

module.exports = mongoose.model("Blog", BlogSchema);