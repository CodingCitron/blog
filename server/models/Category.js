const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    belongTo: { //소 카테고리
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = { Category }
