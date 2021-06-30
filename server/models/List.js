const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    category: {
        type: String
    },
    contents: String,
    privacy: {
        type: Number
    },
    views: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String
    },
    filePath: {
        type: String
    },
    image: String,
}, { timestamps: true })

const List = mongoose.model('List', listSchema)
module.exports = { List }
