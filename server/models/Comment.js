const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'List'
    },
    responseTo: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    content: {
        type: String
    },
    replyCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)
module.exports = { Comment }
