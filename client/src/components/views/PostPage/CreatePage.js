import './CreatePage.css'
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SelectBox from './SelectBox';
import { insertList } from '../../../_actions/list_action'
import Quill from './Quill';

const PrivateOption = [
    {value: 0, lable: "Private"},
    {value: 1, lable: "Public"}
]

function CreatePage(props){
    const dispatch = useDispatch()
        
    const user = useSelector(state => state.user)
    const [body, setBody] = useState({
        category: 'ALL',
        title: '',
        contents: ''
    })
    const [privatePost, setPrivatePost] = useState(0)

    //Quill
    const onEditorChange = (value) => {
        setBody({
            ...body, 
            contents: value
        })
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
        
        console.log(user.userData)

        const variable = {
            writer: user.userData._id,
            title: body.title,
            category: body.category,
            content: body.contents,
            privacy: 0,
            filePath: "ABCD",
            thumbnail: "EFGH",
        }

        console.log(variable)

        dispatch(insertList(variable))
        .then(response => {
            if(response.payload.listSuccess){
                return props.history.push('/')
            }else{
                alert('글 작성에 실패 했습니다.')
            }
        })
    }
    
    const updateSelect = (category) => {
        setBody({
            ...body, 
            category
        })
    }

    SelectBox.defaultProps = {
        value: 'CATEGORY'
    }

    //파일 업로드
    
    return (
        <div className="post-create">
            <form onSubmit={submitHandler}>
                <SelectBox updateSelect={updateSelect}/>
                <input type="text" placeholder="Title" className="title" name="title" autoFocus
                onChange={handleChange} />
                <Quill value={body.contents} onChange={onEditorChange}
                />
                <div className="info">
                    <button>등록하기</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage