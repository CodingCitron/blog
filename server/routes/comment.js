const express = require('express')
const router = express.Router()
const { Comment } = require('../models/Comment')

router.post('/saveComment', (req, res) => {
    const comment = new Comment(req.body)
    comment.save((err, comment) => {
        if(err) return res.json({ success: false, err }), console.log(err)
        Comment.find({ '_id': comment._id })
        .populate('writer', 'email name role image createdAt')
        .exec((err, result) => {
            if(err) return res.json({ success: false, err })
            res.status(200).json({ success: true, result })
        })
    })
})

router.post('/getComments', (req, res) => {
    Comment.find({ 'postId': req.body.postId })
    .skip(parseInt(req.body.paging))
    .limit(parseInt(req.body.loadLength))
    .populate('writer', 'email name role image createdAt')
    .exec((err, comments) => {
        if(err) return res.status(400).send(err), console.log(err)
        res.status(200).json({ success: true, comments })
    })
})

module.exports = router;