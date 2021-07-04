const express = require('express')
const router = express.Router()
const { Comment } = require('../models/Comment')

//댓글 추가
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

//최상위 댓글 보여주기
router.post('/getComments', (req, res) => {
    Comment.find({ 'postId': req.body.postId })
    .exists('responseTo', false) // 필드 존재 여부
    .skip(parseInt(req.body.paging))
    .limit(parseInt(req.body.loadLength))
    .populate('writer', 'email name role image createdAt')
    .sort({ createdAt: 'desc' })
    .exec((err, comments) => {
        if(err) return res.status(400).send(err), console.log(err)
        res.status(200).json({ success: true, comments })
    })
})

//최상위 댓글 개수
router.get('/getCommentsLength/:postId', (req, res) => {
    const postId = req.params.postId
    Comment.findOne({ 'postId': postId })// 전체 리스트 불러오기.
    .exists('responseTo', false)
    .count((err, count) => {
        if(err) return res.status(400).send(err), console.log(err)
        return res.status(200).json({ success: true, length: count })
    }) 
})
//{ $inc: { 필드: 숫자 } }
//답글 추가 + 상위 댓글의 하위 댓글 개수 추가
router.post('/saveReply', (req, res) => {
    console.log('답글 추가 작동')
    Comment.find({ '_id': req.body.responseTo })
    .updateOne({ $inc: { replyCount: 1 } })
    .exec((err, result) => {
        if(err) return res.json({ success: false, err })
        res.status(200).json({ success: true, result })
    })

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

//답글 찾고 가져오기
router.post('/loadReply', (req, res) => {
    Comment.find({ 'responseTo': req.body.responseTo })
    // .skip(parseInt(req.body.paging))
    // .limit(parseInt(req.body.loadLength)) <- 페이징 할거면 추가
    .populate('writer', 'email name role image createdAt')
    .sort({ createdAt: 'desc' })
    .exec((err, reply) => {
        console.log(reply)
        if(err) return res.status(400).send(err), console.log(err)
        res.status(200).json({ success: true, reply })
    })
})

module.exports = router;