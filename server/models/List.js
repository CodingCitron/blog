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
    content: {
        type: String
    },
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

// AutoIncrement 사용 X
// const AutoIncrement = require ( 'mongoose-sequence' ) ( mongoose ) ;
// number: {
//     type: Number,
//     default: 0
// },
// listSchema.plugin(AutoIncrement, {inc_field: 'number'});

const List = mongoose.model('List', listSchema)
module.exports = { List }