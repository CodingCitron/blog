const express = require('express')
const router = express.Router()
const { List } = require('../models/List')

router.post('/insert', (req, res) => {
    const list = new List(req.body)
    list.save((err, doc) => { 
        if(err) return res.json({ listSuccess: false, message: '글 작성 실패', err }),console.log(err)
        return res.status(200).json({ listSuccess: true })
    })
})

router.get('/get', (req, res) => {
    const list = List.find(); // 전체 리스트 불러오기.
	return res.status(200).json({ data: list });
})


module.exports = router;