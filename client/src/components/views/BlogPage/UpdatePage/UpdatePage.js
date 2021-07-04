import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import QuillEditor from '../../editor/QuillEditor'
import SelectBox from '../CreatePage/SelectBox'
import './UpdatePage.css'

const PrivateOption = [
    {value: 0, lable: "Private"},
    {value: 1, lable: "Public"}
]

function UpdatePage(props) {
    const user = useSelector(state => state.user)
    const postId = props.match.params.postId
    const [body, setBody] = useState({
        writer: {},
        category: 'ALL',
        title: '',
        contents: ''
    })
    const [privatePost, setPrivatePost] = useState(0) // 공개 비공개 기능

    //Quill
    //update
    useEffect(() => {
        const variable = {
            postId: postId
        }
        axios.post('/api/list/getPost', variable)
        .then(response => {
            if(response.data.success){
                setBody({
                    writer: response.data.post.writer,
                    category: response.data.post.category,
                    title: response.data.post.title,
                    contents: response.data.post.content
                })
            }else{
                alert('작성 글을 불러오는데 실패했습니다.')
            }
        })
    }, [])

    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setBody({
            ...body, 
            contents: value
        })
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }
    //Quill

    const handleChange = (e) => {
       const { name, value } = e.target

       setBody({
           ...body, 
           [name]: value,
       })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(user.userData && !user.userData.isAuth){
            return alert('로그인 상태가 아닙니다.')
        }

        if(body.writer._id !== user.userData._id){
            return alert('작성자가 일치하지 않습니다.')
        }

        let m,
        urls = [], 
        str = body.contents,
        rex = /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g

        while(m = rex.exec(str)){
            urls.push(m[1]);
        }

        const variable = {
            postId: postId,
            title: body.title,
            category: body.category,
            content: body.contents,
            privacy: 0,
            thumbnail : urls[0]
        }

        if(!variable.title) return alert('제목을 작성하세요.')
        if(!variable.content) return alert('내용이 없습니다.')
        
        axios.post('/api/list/updatePost', variable)
        .then(response => {
            if(response.data.success){
                props.history.push('/')
            }
        })
    }

    //셀렉트 박스
    const updateSelect = (category) => {
        setBody({
            ...body, 
            category
        })
    }

    SelectBox.defaultProps = {
        value: body.category
    }

    // QuillEditor.defaultProps = {
    //     value: body.contents
    // }

    //셀렉트 박스
    return (
        <div className="update-create">
            <form onSubmit={submitHandler}>
                <SelectBox updateSelect={updateSelect}/>
                <input type="text" placeholder="Title" className="title" name="title" autoFocus value={body.title}
                onChange={handleChange} />
                <QuillEditor
                    placeholder={`첫 번째 이미지만 섬네일이 됩니다.`}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                    updateValue={body.contents}
                />
                <div className="info">
                    <button className="button">수정하기</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePage
