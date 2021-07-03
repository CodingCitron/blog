const express = require('express')
const router = express.Router()
const multer = require('multer')
const { List } = require('../models/List')

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/file');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single('file');

router.post('/uploadfiles', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({ 
            success: true, url: res.req.file.path, 
            fileName: res.req.file.filename 
        });
    });
});

router.post('/insertList', (req, res) => {
    const list = new List(req.body)
    list.save((err, postInfo) => { 
        if(err) return res.json({ success: false, message: '글 작성 실패', err }),console.log(err)
        return res.status(200).json({ success: true, postInfo })
    })
})

router.post('/updatePost', (req, res) => {
    List.updateOne({ '_id': req.body.postId }, 
        { 
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            privacy: parseInt(req.body.privacy),
            thumbnail: req.body.thumbnail
         })
         .exec((err) => {
            if(err){ 
                return res.json({ success: false, message: '글 수정 실패', err }),
                console.log(err)
            }
            res.status(200).json({ success: true })
        })
})

router.post('/deletePost', (req, res) => {
    console.log(req.body)
    List.deleteOne({ 'writer': req.body.postId })
    .exec((err) => {
        if (err) return res.status(400).send(err).console.log(err)
        res.status(200).json({ success: true })
    })
})

router.get('/getListLength', (req, res) => {
    const list = List.find()// 전체 리스트 불러오기.
    .count((err, count) => {
        if(err) return res.status(400).send(err).console.log(err)
        return res.status(200).json({ success: true, length: count })
    }) 
})

router.get('/getList/:paging/show/:show', (req, res) => {
    const paging = parseInt(req.params.paging),
    show = parseInt(req.params.show)
    List.find()
        .skip(paging)
        .limit(show)
        .populate('writer', 'name role')
        .sort({ createdAt: 'desc' })
        .exec((err, list) => {
            if (err) return res.status(400).send(err).console.log(err)
            // list.createdAt = getDate(list.createdAt)
            res.status(200).json({ success: true, list })
        })
})

router.post('/getPost', (req, res) => {
    List.findOne({ '_id': req.body.postId })
        .populate('writer', 'name role')
        .exec((err, post) => {
            if (err) return res.status(400).send(err).console.log(err)
            res.status(200).json({ success: true, post })
        })
});

module.exports = router;