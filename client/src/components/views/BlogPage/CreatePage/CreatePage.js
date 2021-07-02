import './CreatePage.css'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import SelectBox from './SelectBox';
import QuillEditor from '../../editor/QuillEditor'
import axios from 'axios';

const PrivateOption = [
    {value: 0, lable: "Private"},
    {value: 1, lable: "Public"}
]

function CreatePage(props){        
    const user = useSelector(state => state.user)
    const [body, setBody] = useState({
        category: 'ALL',
        title: '',
        contents: ''
    })
    const [privatePost, setPrivatePost] = useState(0) // 공개 비공개 기능

    //Quill
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

        let m,
        urls = [], 
        str = body.contents,
        rex = /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/g

        while(m = rex.exec(str)){
            urls.push(m[1]);
        }

        const variable = {
            writer: user.userData._id,
            name: user.userData.name,
            title: body.title,
            category: body.category,
            content: body.contents,
            privacy: 0,
            thumbnail : urls[0]
        }

        if(!variable.title) return alert('제목을 작성하세요.')
        if(!variable.content) return alert('내용이 없습니다.')
        
        axios.post('/api/list/insertList', variable)
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
        value: 'CATEGORY'
    }
    //셀렉트 박스

    return (
        <div className="post-create">
            <form onSubmit={submitHandler}>
                <SelectBox updateSelect={updateSelect}/>
                <input type="text" placeholder="Title" className="title" name="title" autoFocus
                onChange={handleChange} />
                <QuillEditor
                    placeholder={`첫 번째 이미지만 섬네일이 됩니다.`}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />
                <div className="info">
                    <button>등록하기</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage